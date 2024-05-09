import * as Assets from '../assets/Assets'

interface ServiceProps {
  title: string;
  subtitle: string;
  imgSrc: any;
}

const services: ServiceProps[] = [
  {
    title: "Seamless Collaboration",
    subtitle: "A Dedicated Workspace for Creator and Editor for Seamless Collaboration",
    imgSrc: Assets.GroupBrainstorming,
  },
  {
    title: "Realtime Communication",
    subtitle: "Facilitating real-time messaging and communication for efficient collaboration.",
    imgSrc: Assets.UserWChatting,
  },
  {
    title: "Eazyy File Sharing",
    subtitle: "Secure file sharing and storage for video assets, scripts, and related media.",
    imgSrc: Assets.UserMChatting,
  },
  {
    title: "Direct Uploading To Youtube Channel",
    subtitle: "Enabling Creators to directly upload their content from coB to there YT channel on just one click.",
    imgSrc: Assets.GuyUploadingFileToYTDB,
  },
  {
    title: "Video Preview and Approval",
    subtitle: "Allowing Creator to preview edited videos sent by Editor, provide feedback, and grant final approval.",
    imgSrc: Assets.ManApproves,
  },
  {
    title: "Project Management",
    subtitle: "Providing tools to efficiently manage video projects, media assets, Schedule your content and many more",
    imgSrc: Assets.WorkingAndTimeManagement,
  },
  {
    title: "Channel Data Security Assurance",
    subtitle: "Your Channel's Safety, Our Priority: Your Data, Your Decision. Rest assured, we never store without your permission",
    imgSrc: Assets.SecureData,
  },
]

const ServiceCard = ({ title, subtitle, imgSrc }: ServiceProps) => {
  return (
    <div className="flex flex-col h-44 w-1/4 justify-center bg-[#00ADB5] shadow-lg rounded-lg mx-4 mb-5 bottom-0">
      <h2 className="text-gray-800 text-lg font-semibold text-center">{title}</h2>
      <div className="flex flex-row">
        <img className="h-32 w-48 object-cover rounded-l-lg mr-1 ml-1" src={imgSrc} alt="Service" />
        <div className="w-2/3 p-2">
          <p className="mt-2 text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <div className='w-screen h-screen text-center flex relative bg-[#222831]' id="Services">
        <div className="text-white absolute w-screen mt-8">
          <p className="m-auto w-96">Empowering creators with advanced collaboration tools to elevate video production.</p>
        </div>
        <div className=" flex justify-center items-center mt-20">
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Service