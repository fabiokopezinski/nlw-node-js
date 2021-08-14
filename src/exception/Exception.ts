
export class Exception extends Error{
  
  statusCode: any;

  constructor( message: string,statusCode: number) {
    super(message);
    this.name = "Exception"
    this.statusCode = statusCode;
    Exception.captureStackTrace(this, Exception);
  }
}
