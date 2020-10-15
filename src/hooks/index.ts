import { decodeToken } from "../commons/utils";

export default (authorizedUsers: string[]) => {
    return async (req: any, res: any, next: any) => {
        console.log("MIDDLEWARE-BODY");
        console.table(req.body);
        const header = req.headers.authorization;
        if (typeof header !== "undefined") {
            const bearer = header.split(" ");
            const token = bearer[1];
            req.token = token;
            try {
                const decodedToken: any = await decodeToken(token);
                if (!decodedToken) {
                    console.log("invalid decoded token");
                    res.sendStatus(401);
                }
                console.log("userType:", decodedToken.role);
                if (authorizedUsers.includes(decodedToken.role)) {
                    next();
                } else {
                    console.log("invalid authorization token");
                    res.sendStatus(401);
                }
            } catch (err) {
                console.log(err);
                res.sendStatus(401);
            }

        } else {
            // If header is undefined return unAuthorized (401)
            res.sendStatus(401);
        }

    };
};