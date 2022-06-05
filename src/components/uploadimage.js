import React, { Component } from "react";
import UploadService from "../services/file-upload.service";


export default class UploadImages extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        currentFile: undefined,
        previewImage: undefined,
        progress: 0,
        message: "",
        imageInfos: [],
      };
    }
  }