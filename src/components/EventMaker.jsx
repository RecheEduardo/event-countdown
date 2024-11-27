import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const EventMaker = ({
  onSubmit,
  colorTheme,
  eventTitle,
  bgImage,
  eventDate,
}) => {
  return (
    <>
      <div className="container fadeInUp">
        <h1 className="text-center popUp">Faça o seu contador regressivo!</h1>
        <form className="popUp" onSubmit={onSubmit} method="POST">
          <label>
            <p>Título</p>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Título do evento..."
              onChange={(e) => eventTitle(e.target.value)}
              required
            />
          </label>

          <label>
            <p>Data do evento</p>
            <input
              type="date"
              name="date"
              id="date"
              className="form-control date"
              placeholder="Título do evento..."
              onChange={(e) => eventDate(e.target.value)}
              required
            />
          </label>

          <label>
            <p>Imagem</p>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              placeholder="Insira a URL da imagem..."
              onChange={(e) => bgImage(e.target.value)}
              required
            />
          </label>

          <label>
            <p>Cor</p>
            <input
              type="color"
              name="color"
              id="color"
              placeholder="Título do evento..."
              onChange={(e) => colorTheme(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="button btn btn-lg submit-btn">
            Criar
          </button>
        </form>
      </div>
      <AnimatedBackground />
    </>
  );
};

export default EventMaker;
