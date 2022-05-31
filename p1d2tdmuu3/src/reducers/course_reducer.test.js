import reducer from './course_reducer';
it('return state',()=>{
    const newState = reducer({},{type:'GET_COURSES', payload:[]});
    expect(newState.topics.length).toEqual(0);
});