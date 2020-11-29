import React from 'react'
import Axios from "axios"
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Dropdown,
} from "react-bootstrap"

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        news: [],
        category: "general",
        country: "id",
        showCategory: [
            "business",
            "entertainment",
            "general",
            "health",
            "science",
            "sports",
            "technology",
        ],
        showCountry: [
            "au","cn","eg","fr","de","gr","hk","id","in","it","jp","my","nl","ph","ru","sg","gb","us"
        ],
      }
    }
    fetchDataNews = (categoryId, country) => {
      let URL = `http://newsapi.org/v2/top-headlines?apiKey=92c554eea6424124afaf206308465695&category=${categoryId}&country=${country}`;
      Axios.get(URL)
        .then((res) =>
          this.setState({
            news: res.data.articles,
            category: this.state.category,
            country: this.state.country,
          }
          )
        )
        .catch((e) => console.log(e.message))
        this.layoutBerita()
    }
    handleChangeCategory = (categoryId) => {
      this.setState({
        ...this.props,
        category: categoryId,
      }
      )
      this.fetchDataNews(categoryId, this.state.country)
    }
    handleChangeCountry = (countryId) => {
      this.setState({
        ...this.props,
        country: countryId,
      }
      )
      this.fetchDataNews(this.state.category, countryId)
    }
    layoutBerita = () => {
      return this.state.news.map((item, index) => {
        return (
          <Col md={3} key={index}>
            <Card style={{ width: '350px', marginBottom: "20px" }}>
              <Card.Img variant="top" src={item.urlToImage}/>
              <Card.Body style={{ backgroundColor: "gray" }}>
                <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  {item.description}
                </Card.Text>
                <Button variant="dark" href={item.url}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      }
      )
    }
    listCategoryMenu = () => {
        return this.state.showCategory.map((category) => (
          <Dropdown.Item
              onClick={() => this.handleChangeCategory(category)}
              key={category}
              href="#/news">
              {category}
          </Dropdown.Item>
          )
          )
    }
  
    listCountryMenu = () => {
        return this.state.showCountry.map((country) => (
          <Dropdown.Item
              onClick={() => this.handleChangeCountry(country)}
              key={country}
              href="#/news">
              {country}
          </Dropdown.Item>
          )
          )
    }
    componentDidMount() {
      this.fetchDataNews(this.state.category, this.state.country)
    }
    render() {
      return (
        <div>
          <Container fluid>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div style={{display:'flex'}}>
                    <Dropdown  style={{marginRight:'20px'}}>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: '160px'}}>
                            Country
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.listCountryMenu()}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: '160px'}}>
                            Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.listCategoryMenu()}
                        </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <p style={{fontSize: "35px"}}>{this.state.country} | {this.state.category}</p>
                  </div>
              </div>
            <Row>{this.layoutBerita()}</Row>
          </Container>
        </div>
      )
    }
  }
export default News