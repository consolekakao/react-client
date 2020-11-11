import React, { Component } from "react";
class Ftp extends Component {
  render() {
    return (
      <div>
        <form
          action={"http://172.22.200.49:3002/upload"}
          encType={"multipart/form-data"}
          method={"post"}
        >
          파일 : <input type="file" name="myFile" />
          <button type="submit">upload</button>
        </form>
      </div>
    );
  }
}
export default Ftp;
