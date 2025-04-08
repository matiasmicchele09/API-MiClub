import { IsNotEmpty, IsString } from 'class-validator';


export class CreateClubDto {
  
//   @IsString()
//   @IsNotEmpty()
  name: string | undefined;
  
  //@IsNotEmpty()
  city: string | undefined;

  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
}