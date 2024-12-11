import { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";

const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState([]);
  const [usercampaign, setUsercampaign] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const allData = await getCampaigns();
      const userData = await getUserCampaigns();
      console.log('All Campaigns:', allData);
      console.log('User Campaigns:', userData);
      setAllcampaign(allData);
      setUsercampaign(userData);
    };

    fetchCampaigns();
  }, []);

  // Popup modal for donation
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(null);

  console.log('Donate Campaign:', donateCampaign);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        //title="All Listed Campaigns"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card
        //title="Your Created Campaigns"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
