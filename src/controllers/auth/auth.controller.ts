import { LoginDto} from "../../dto/login.dto";
import { AuthService } from "../../services/auth/auth.service";

export const login = async (req: LoginDto, res: any) => {
    try {
        console.log("En el controller");
        const authService = new AuthService();
        //const { email, password } = req.body;
        console.log(req.email,req.password); //TODO     llegan undefined
        const user = await authService.login(req.email,req.password);
        // Validate the DTO here if needed
        // For example, using class-validator or any other validation library
        // const errors = await validate(loginDto);
        // if (errors.length > 0) {       
        
    
        //     return res.status(400).json({ errors: errors });
        // }
        
        // Perform login logic here
        // For example, check credentials against a database
        
        // If successful, return a success response

        //return res.status(200).json({ message: "Login successful" });
        return res.status(200).json(user);
    }
    catch (error) { 
        return res.status(500).json({ message: "An error occurred during login", }

        );
}
}