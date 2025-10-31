function App() {
  return (
    <div className="chatPage">

      {/*Início do header esquerdo*/}

      <div className="nav">
        <div className="header-title logo-icon">
        <h1 className="header-title-text">Ephemer</h1> 
        </div>
        
        <div className="header-options">
          <div className="header-options-inner">

            <a className="header-options-item ephemer-mail-icon">
              <p>Ephemer-mail</p>
            </a>

            <a className="header-options-item chat-icon">
              <p>Chat</p>
            </a>

            <a className="header-options-item settings-icon" >
              <p>Admin-settings</p>
            </a>

          </div>
        </div>

        <div className="header-profile profile-icon">
          <div>
          </div>
          <p>@User-5235</p>
          
        </div>
      </div>

      {/*Fim do header esquerdo*/}
      
      {/*Início da user list*/}

      <div className="user-list">

        <div className="user-list-header">
          <div className="user-list-search">
            <p>Conversas</p>
            <input
              type="search"
              placeholder="Pesquisar"
              className="user-list-search-box"
            />
          </div>
        </div>

        <div className="user-list-inner">

          <a>
            <p>@Anonymous-241</p>
          </a>
          <a>
            <p>@Anonymous-035</p>
          </a>
          <a>
            <p>@Anonymous-461</p>
          </a>
          <a>
            <p>@Anonymous-264</p>
          </a>

        </div>

      </div>

      {/*Fim da user list*/}

      {/*Início do chat*/}
      <div className="chat">

        <div className="chat-top">

        </div>

        <div className="chat-inner">
        </div>

      </div>
      {/*Fim do chat*/}
    </div>
  );
}

export default App;