import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistList, setPagination } from '../actions';
import { toast } from 'react-toastify';
import { discogsApi, updateApi } from '../services/discogsApi';
import ArtistCard from '../components/ArtistCard';
import ReactPaginate from 'react-paginate';
import Details from '../components/Details';
import { Layout, Breadcrumb } from 'antd';
import { Row, Col, Divider } from 'antd';

const { Content } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };

toast.configure();
const ArtistList = () => {
  const dispatch = useDispatch();
  const artistList = useSelector(state => state.artistList.artistList)
  const artist = useSelector(state => state.setParams.artist)
  const track = useSelector(state => state.setParams.track)
  const dataPagination = useSelector(state => state.dataPagination)

  useEffect(() => {
    if (artistList && artistList.length === 0 ) {
      discogsApi('nirvana', 'nevermind')
        .then(response => {
          if (response.error) {
            toast.error(response.error);
          } else {
            console.log(response.results);
            dispatch(setPagination(response.pagination));
            dispatch(getArtistList(response.results));
          }
        })
    }
  }, [artistList, dispatch])

  const updateList = (artist, track, page) => {
    updateApi(artist, track, page)
      .then(response => {
        if (response.error) {
          toast.error(response.error);
        } else {
          dispatch(getArtistList(response.results))
        }
      })
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    updateList(artist, track, selectedPage + 1)
  };

  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={dataPagination.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </Breadcrumb.Item>
      </Breadcrumb>
      </Content>
      <Row className="site-layout-content" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Divider orientation="left">Albums</Divider>
        {artistList && artistList.length !== 0 ? (
          artistList.map(card => (
            <ArtistCard
              key={card.id}
              id={card.id}
              thumb={card.thumb}
              title={card.title}
              year={card.year}
              card={card}
            />
        ))) : <div>Loading</div>}
      </Row>
      <Details />
    </Layout>
  )
}

export default ArtistList;
