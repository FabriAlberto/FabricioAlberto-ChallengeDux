import { apiDux } from "@/service/api.service";


export default async function Home() {
  try {
    const personal=await apiDux.getPersonal()
    return (
      <div className="text-xl font-bold"> 
       Usuarios
      </div>
    );
  } catch (error) {
   return  <p>Ha ocurrido un error</p>
  }
  
}
