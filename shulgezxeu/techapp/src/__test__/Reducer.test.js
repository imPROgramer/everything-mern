import reducer from '../reducers';

describe('Reducer', () => {
    it('should return initial state', () => {
        expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify({
            courses: {}
        }))
    })

    it('reduceer test for GET_COURSES',()=>{
        let state ={
            courses: []
        }

        state = reducer(state,{
            action:"GET_COURSES"
        })
        expect(state).toEqual({
            courses: []
        })
    })
})
