import getUser from '../../utils/getUser'

const apiGetUser = async ( req, res ) => { 
  const data = await getUser('rafaelrato1');
  res.send( data );
}

export default apiGetUser;