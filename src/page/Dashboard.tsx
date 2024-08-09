import { DashboardImage, HomeImage } from "../asset";
import { Card } from "../component";
import {
  academicList,
  courseList,
  traitGraph,
  hobbieGraph,
} from "../data/Dashboard.data";
import { Doughnut, Radar } from "react-chartjs-2";
import "../styles/page/Dashboard.sass";

const Dashboard = () => {
  const renderSocialList = () =>
    courseList.map((ele) => (
      <Card key={ele.title} content={ele.content} title={ele.title} />
    ));
  const renderAcademicList = () =>
    academicList.map((ele) => (
      <Card key={ele.title} content={ele.content} title={ele.title} />
    ));
  return (
    <div className="dashboard-container">
      <div className="intro">
        <div className="intro-content">
          <h1>Thy Nguyen</h1>
          <p>22</p>
          <p>Web developer</p>
        </div>
      </div>
      <div className="dashboard-wrapper">
        <div className="dashboard">
          <div className="cards-display">
            <div>{renderAcademicList()}</div>
            <div className="card-container">
              <div className="trait">
                <Radar
                  data={traitGraph}
                  options={{
                    plugins:{
                      legend: {
                        display: false,
                      },

                    }
                    // scale: {
                    //   ticks: {
                    //     display: false,
                    //     maxTicksLimit: 3,
                    //   },
                    //   pointLabels:{
                    //     fontColor: "rgba(146, 64, 14)",
                    //     fontSize: 13
                    //  },
                    // },
                  }}
                />
              </div>
            </div>
            <div className="card-container">
              <div className="hobbie">
                <Doughnut
                  data={hobbieGraph}
                  options={
                    {
                      plugins:{
                        legend: {
                          // labels:{
                          //   fontColor: "rgba(146, 64, 14)",
                          //   fontSize: 13
                          // }
                        },
                      }
                    }
                  }
                />
              </div>
            </div>
            <div>{renderSocialList()}</div>
          </div>
        </div>
        <div className="experience-container">
          <div className="experience">
            <img src={DashboardImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
