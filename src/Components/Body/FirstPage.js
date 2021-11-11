import React from "react";
import { useHistory } from "react-router";
import Footer from "../Footer/Footer";
import "./FirstPage.css";

const FirstPage = () => {
  const history = useHistory();
  const goToDevelopmentPage = (pageName) => {
    history.push(`/react-crud/${pageName}`);
  };
  return (
    <>
    <div className="container">
      <div className="items" onClick={() => goToDevelopmentPage("Frontend")}>
        Frontend App Development<br/>
        <img
          className="firstPageImage"
          src={
           "https://cdn.august.com.au/wp-content/uploads/2015/04/Allan_Get-Web-Developer-Savvy_header.png"
          }
          alt="img"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("Backend")}>
        Backend App Development<br/>
        <img
        className="firstPageImage"
          src={
            "https://miro.medium.com/max/1200/1*G48L33n3M7FXze_kturcyQ.jpeg"
          }
          alt="Img"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("Fullstack")}>
        Full stack App development
        <img
        className="firstPageImage"
          src={
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
          }
          alt="Img"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("Android")}>
        Android App Development
        <img
        className="firstPageImage"
          src={
            "https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/android/hero_image-fc5b7ec3e1de4498f823edc8ed1d345d16e52de1c2b4be98d3fb26df086df117.svg"
          }
          alt="Img"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("IOS")}>
        IOS App Development
         <img
        className="firstPageImage"
          src={
            "data:image/jpeg;base64,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"
          }
          alt="Img"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("Desktop")}>
        Desktop App Development
        <img
        className="firstPageImage"
          src={
            "https://www.qbkartitsolutions.com/uploads/services/desktop-application-development.png"
          }
          alt="Img"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("Devops")}>
        DevOps
        <img
        className="firstPageImage"
          src={
            "https://www.scnsoft.com/blog-pictures/itsm/how-can-a-system-administrator-turn-into-a-devops-engineer.png"
          }
          alt="Img"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("Cloud")}>
        Cloud
        <img
        className="firstPageImage"
          src={
            "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/11/How-To-Become-A-cloud-engineer.jpg"
          }
          alt="ReactImg"
        />
      </div>
      <div className="items" onClick={() => goToDevelopmentPage("Network")}>
        Network
        <img
        className="firstPageImage"
          src={
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200227194110/How-to-Become-a-Network-Engineer.png"
          }
          alt="ReactImg"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FirstPage;
