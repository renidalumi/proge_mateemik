import { Request, Response} from'express';
const responseCodes = {
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    notFound: 404,
  };
export default (req: Request, res: Response) => 
    res.status(responseCodes.ok).json({
        message: 'Alive',
});