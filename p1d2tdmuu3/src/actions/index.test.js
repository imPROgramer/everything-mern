import {Courses, PostDate} from "./index";
import fetch from 'jest-fetch-mock';


it('fetch all courses', ()=>{
    
    const fakeCourses = [
        {
          "name": "Cloud Computing",
          "fee": "24500",
          "img": "https://miro.medium.com/max/469/1*24oTbi-r9SXkkJjtV2_B2A.png",
          "details": "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user"
        }];
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeCourses)
    }));
    const response = Courses();

    expect(response.type).toBe('GET_COURSES');

});

it('Save date', ()=>{

    const fakeCourses = {};
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeCourses)
    }));
    const response = PostDate('testName','testphone', 'test@email.com','tesetSubject');

    expect(response.type).toBe('POST_FORM');

})