function Register(){
    return(
        <div className="container mx-auto flex flex-1 gap-7">
            
            <div className="flex flex-col gap-10">
                <h2 className="font-bold text-6xl mt-8">Create An Account</h2>
                <input type="text" placeholder=" First Name" className="btn border   border-gray-400 py-4 px-[4em] rounded-full cursor-pointer   my-4 gap-4"/>
           
         
                <input type="text" placeholder="Last Name" className="btn border   border-gray-400 py-4 px-[4em] rounded-full cursor-pointer   "/>

                <input type="text" placeholder="Email Address" className="border border-gray-400 text-black rounded-full px-[4em] py-8"/>
                <input type="text" placeholder="Phone Number" className="border  border-gray-400 rounded-full px-[4em] py-8"/>
                <input type="text" placeholder="Password" className="border  border-gray-400 rounded-full px-[4em] py-8"/>
                <input type="text" placeholder="Confirm Password" className="border  border-gray-400 rounded-full px-[4em] py-8"/>
                <button className="border  border-gray-400 bg-[#45C9A1] rounded-full text-white px-[4em] py-6 font-bold text-2xl">Create Account</button>
                <p className="border-b-2">OR</p>
          <p className="flex justify-center">
            Already Have An Account?{" "}
            <a href="/login" className="text-[#45C9A1]">
              sign in
            </a>
          </p>

            </div>
            
            </div>
    )
}
export default Register;