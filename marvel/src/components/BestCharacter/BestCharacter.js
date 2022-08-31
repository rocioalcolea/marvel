import { Header, Button, Grid, Image } from "semantic-ui-react";
import Container from "../Container";
import marvelImage from "../../img/marvel.png";
import "./BestCharacter.scss";
export default function BestCharacter() {
  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided="vertically">
          <Grid.Column>
            <Header as="h1">
              Los mejores personajes de los que todo el mundo habla
            </Header>
            <Header as="h3">Disfruta del mejor contenido</Header>
            <Button>Ver todo los personajes</Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} alt="Marvel APP" />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
