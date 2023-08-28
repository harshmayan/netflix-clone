import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';
import MovieList from '@/components/MovieList';
import { getSession} from 'next-auth/react'
import { NextPageContext } from 'next/types'
import useMoviesList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import InfoModal from '@/components/InfoModal';
import useInfoModal from '@/hooks/useInfoModalStore';

export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal} = useInfoModal();
  

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar /> 
      <BillBoard />
      <div className='pb-40'>
      <MovieList title='Trending Now' data={movies} />
      <MovieList title='My List' data={favorites} />
      </div>
    </>
  )
}
