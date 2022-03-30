export class EmailController {
    enviar(req: Request, res: Response) {

        res.status(200).json({
            message: "emails enviads"
        });
    }
}