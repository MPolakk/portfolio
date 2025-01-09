const Header = () => {
    return ( 
        <header className="h-60">
            <div className="flex justify-between relative">
                <div className="mt-8 w-10 h-10 bg-stone-900 brightness-150 rounded">
                    <div></div>
                </div>
                <div className="grid place-items-center w-14 h-[calc(2.5rem_+_2.5rem)] bg-stone-900 brightness-150 absolute right-0 top-0 rounded-br-lg rounded-bl-lg">
                    <div className="mt-6 icon w-10 h-10 bg-slate-50 rounded">

                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;