






--> Implementing Redux Toolkit
1) Persist State value through out the project













Working with state using react-redux
import useSelector and useDispatch from rr
import slice on which state you want to update or work


const dispatch = useDispatch()
const counter(or slice) = useSelector( state => state.counter.count) // useSelector to fetch the current value 
instead of updating state directly like we do in react, do dispatch(action name())



#FIXME:  server is unware of client side state .. to fix this problem
add bridge
create master Reducer

import _NEXT_REDUX_WRAPPER_HYDRATE_




>steps for redux toolkit