import React from 'react'
import { useSelector } from 'react-redux';
const NavLink = ({ src, alt, text }) => (
    <div className="flex flex-col justify-center px-3 py-2 mt-1 w-full bg-black border border-white border-solid">
        <div className="flex gap-3">
            <img loading="lazy" src={src} alt={alt} className="shrink-0 w-6 aspect-square" />
            <div>{text}</div>
        </div>
    </div>
);
function Aside() {

    const authStatus = useSelector(state => state.auth.authStatus);
    

  return (
    
      <aside className="flex flex-col max-md:flex-auto  max-md:w-full">
                    <section className="flex flex-col grow justify-center w-full text-base font-semibold leading-6 text-white bg-black border-r border-gray-200 border-solid">
                        <nav className="flex flex-col justify-between h-full">
                            <ul className="flex flex-col pt-8 pb-4">
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/778c46fde92e09591030707cfbd1302ab07b27526ca30dba9fe1520d84c636ef?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="Home icon" text="Home" />
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/187d86783e1ec772483772398dc0147e7c66417b985da4f8ba0941b79a9f03c6?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="Liked Videos icon" text="Liked Videos" />
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/77302ea414cace6411b8c4bba8bdb5c9eb9db9b6fe4e5a0a0bb9c00606bf67ae?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="History icon" text="History" />
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4ef943770e4e41e01189e461fc5971606db447498c73283b4b06aa5fe2aaf2?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="My content icon" text="My content" />
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07f7bee7d9db5632cfeb898ae5e9b9750bbeafbab4b2ed6fcf1fb328af6de54?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="Collection icon" text="Collection" />
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3f873b67b66561ce4d6e01b3c6351708021ebc7936a6d1a028ad18ac0ee1ee4?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="Subscribers icon" text="Subscribers" />
                            </ul>
                            <ul className="flex flex-col px-4 pb-8 whitespace-nowrap max-md:flex max-md:items-center max-md:justify-center">
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3b2cf872fc71a30680ae98c763864005155c353acd8e64ebf7125922d9a0744?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="Support icon" text="Support" />
                                <NavLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9f1647e6016f4fc80510c4d81610fee95eacbb7e33a340b765495d7f95c273?apiKey=2a71bb6c876b4ac2af76de651fbd6a28&" alt="Settings icon" text="Settings" />
                            </ul>
                        </nav>
                    </section>
                </aside>
    
  )
}

export default Aside
