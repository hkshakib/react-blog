import "../Styles/Card.css";
const Card = () => {
  return (
    <body>
      <section className="container">
        <div className="card-container">
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="a brand new sports car"
            />
          </div>
          
          <div className="card-body">
            <span className="card-badge card-badge-blue">Car design</span>
            <h1>Why is the sports cars so well designed?</h1>
            <p className="card-subtitle">
              An exploration into the car design industry and how it works
            </p>
            <div className="card-author">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="author avatar"
              />
              <div className="author-info">
                <p className="author-name">John Doe</p>
                <p className="post-timestamp">2h ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1504728078670-d0a59873c8c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="a landscape view full of baloons"
            />
          </div>
          <div className="card-body">
            <span className="card-badge card-badge-purple">Adventure</span>
            <h1>Discover new adventures over the world</h1>
            <p className="card-subtitle">
              Adventure and baloons are trends these days
            </p>
            <div className="card-author">
              <img
                src="https://images.unsplash.com/photo-1504728078670-d0a59873c8c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="author avatar"
              />
              <div className="author-info">
                <p className="author-name">John Doe</p>
                <p className="post-timestamp">2h ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1506422748879-887454f9cdff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="a city full of buildings"
            />
          </div>
          <div className="card-body">
            <span className="card-badge card-badge-pink">Engineering</span>
            <h1>Living in downtown in the biggest cities</h1>
            <p className="card-subtitle">
              Citizens of the biggest cities in the world talk about their lives
            </p>
            <div className="card-author">
              <img
                src="https://images.unsplash.com/photo-1506422748879-887454f9cdff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="author avatar"
              />
              <div className="author-info">
                <p>John Doe</p>
                <p>2h ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};
export default Card;
