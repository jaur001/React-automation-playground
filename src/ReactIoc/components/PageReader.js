import { HttpParams, HttpClient } from "../utils/HttpClient";
import ReactIOCException from "../utils/ReactIOCException";

const PageReader = {
  getPageStructure: (path) => {
    let result = {};
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const params = new HttpParams(
      path,
      "GET",
      false,
      headers,
      null,
      false,
      (body, headers) => {
        result = body;
      },
      (status, body, headers) => {
        throw new ReactIOCException("Error reading Page Structure", body);
      }
    );
    HttpClient.makeHttpRequest(params);
    return result;
  }
}
export default PageReader;