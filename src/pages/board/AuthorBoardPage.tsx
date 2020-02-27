import React, { Fragment, useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthorCard from '../../components/authorCard/AuthorCard';
import StoreContext from '../../app/store';
import { Search } from '../../components/search/Search';
import Author from '../../model/author';
import { useTranslation } from 'react-i18next';

const AuthorBoardPage = (): JSX.Element => {

  const { t } = useTranslation();

  const { architects } = useContext(StoreContext);
  const [searchAuthor, setSearchAuthor] = useState<Author[]>(architects);

  const filterHandler = (search: string, id: number) => {
    console.log(id);
  setSearchAuthor(architects.filter(author => {
        let name = t(author.name).toLowerCase();
        let cityBirth = t(author.cityBirth).toLowerCase();
        if (id === 1)
          return name.includes(search);
        else if (id === 2) {
          return cityBirth.includes(search);
        }
        else {
          return author.timeLife.includes(search);
        }
    }));
  };

  return (
    <Fragment>
      <h2 className="text-center text-info">{t('search.typeSearch')}</h2>
      <Container>
        <Row className="align-items-center justify-content-center search">
        <Search
        dataSearch={filterHandler} 
        />
        </Row>
      </Container>
        <Container>
        <Row className="row-custom-align">
          {searchAuthor.map((x, i) => (
            <Col className="col-without-padding" key={i}>
              <AuthorCard author={x}></AuthorCard>
            </Col>
          ))}
        </Row>
        </Container>
    </Fragment>
  );
};

export default AuthorBoardPage;
