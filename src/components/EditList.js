import React from 'react';
import { observer } from 'mobx-react';
import {
  Button,
  Grid,
  Col,
  Row,
} from 'react-bootstrap';
import Webshop from '../stores/Webshop';
import WebshopList from '../stores/WebshopList';
import EditContainer from './EditContainer';
import Topnavbar from './Topnavbar';

export default observer(class EditList extends React.Component {
  createWebshop= () => {
    const webshop = new Webshop();
    webshop.id = WebshopList.newId;
    WebshopList.addWebshop(webshop);
  }
  render() {
    const webshops = WebshopList.webshops;
    return (
      <div>
        <Topnavbar brand='White label webshop' navbarColor='#34495e' />
        <Grid>
          <Row>
            <Col xs={12}>
              <p>
                <Button
                  bsStyle='success'
                  bsSize='large'
                  onClick={this.createWebshop}
                >
                Create webshop
                </Button>
              </p>
              <hr />
              <ul className='list-unstyled'>
                {
                  webshops.reverse().map(
                    webshop => <EditContainer key={webshop.id} webshop={webshop} />)
                }
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});
