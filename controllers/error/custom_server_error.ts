export default class CustomServerError extends Error {
  public statusCode: number;

  public location?: string; //300 번대 에러, 리다이렉션 하려고 넣음.

  constructor({ statusCode = 500, message, location }: { statusCode?: number; message: string; location?: string }) {
    super(message);
    this.statusCode = statusCode;
    this.location = location;
  }

  serializeErrors(): { message: string } | string {
    return { message: this.message };
  }
}
