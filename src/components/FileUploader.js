import { useState } from 'react';

// ripped from: https://www.pluralsight.com/guides/uploading-files-with-reactjs

const FILE_NOT_JSON_ERR_MSG = (fileName) => {
  return `The following file is not a JSON file:
    ${fileName}
This program only supports JSON files for uploading/downloading data.
Please ensure you have selected the correct file.`;
}
const JSON_FILE_PARSE_ERR_MSG = (fileName) => {
  return `The following JSON file could not be parsed:
    ${fileName}
It may be poorly formatted. 
Check the console output for more details.`;
}
const COULD_NOT_READ_FILE_ERR_MSG = (fileName) => {
  return `The following file could not be read:
    ${fileName}
Please refresh the page and try again.
Check the console output for more details.`;
}
const UNSUPPORTED_FEATURE_ERR_MSG = "Unfortunately, your browser doesn't support this feature. Whoops!";

function FileUploader(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isFilePicked, setIsFilePicked] = useState(false);

  // Function assumes that file is a valid JSON file.
  const parseJSONFile = (file) => {
    const reader = new FileReader();

    reader.onerror = () => { 
      alert(COULD_NOT_READ_FILE_ERR_MSG(file.name));
      console.log(reader.error); 
    } 
    reader.onload = () => {
      let fileText = reader.result;
      let fileObject;
      try {
        fileObject = JSON.parse(fileText);
      } catch (err) {
        alert(JSON_FILE_PARSE_ERR_MSG(file.name));
        console.log(err);
        return;
      }
      console.log(fileObject);
    };

    reader.readAsText(file);
  }

  const changeHandler = (event) => {
    if (event.target.files.length === 0) {
      setIsFilePicked(false);
      setSelectedFiles([]);
    } else {
      setIsFilePicked(true);
      setSelectedFiles(Array.from(event.target.files));
    }
  }

  const handleSubmission = () => {
    if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
      alert(UNSUPPORTED_FEATURE_ERR_MSG);
    } 
    console.log(selectedFiles);
    for (let i = 0; i < selectedFiles.length; i++) {
      let file = selectedFiles[i];
      if (file.name.substr(-5) !== '.json') {
        alert(FILE_NOT_JSON_ERR_MSG(file.name));
        continue;
      }
      parseJSONFile(selectedFiles[i]);
    }
  }

  return (
    <div>
      <input type="file" id="file-selector" accept=".json" onChange={ changeHandler } multiple />
      <input 
        type="button" 
        id="accept-files-btn" 
        value="Accept the files" 
        onClick={ handleSubmission }
        disabled={!isFilePicked}
      />
      
    </div>
  );
}

export default FileUploader;