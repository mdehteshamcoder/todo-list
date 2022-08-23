import { ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS, PATCH_TASK_ERROR, PATCH_TASK_LOADING, PATCH_TASK_SUCCESS } from "./ActionType"

const initialState={
    loading:false,
    error:false,
    tasks:[]
}

export const reducer=(state=initialState,{type,payload})=>{
  switch(type)
  {
    case GET_TASK_LOADING:
        return{
            ...state,
            loading:true
        }
        
        case GET_TASK_SUCCESS:
        return{
            ...state,
            loading:false,
            tasks:payload,
            error:false
        }
        
        case GET_TASK_ERROR:
            return{
                ...state,
                loading:false,
                error:true
            }


            case ADD_TASK_LOADING:
                return{
                    ...state,
                    loading:true
                }
                
                case ADD_TASK_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    
                    error:false
                }
                
                case ADD_TASK_ERROR:
                    return{
                        ...state,
                        loading:false,
                        error:true
                    }

                    case PATCH_TASK_LOADING:
                        return{
                            ...state,
                            loading:true
                        }
                        
                        case PATCH_TASK_SUCCESS:
                        return{
                            ...state,
                            loading:false,
                            
                            error:false
                        }
                        
                        case PATCH_TASK_ERROR:
                            return{
                                ...state,
                                loading:false,
                                error:true
                            }

        default:
           return state
  }
 
}