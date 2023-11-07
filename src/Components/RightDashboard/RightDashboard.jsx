import StylesRightDashboard from "./RightDashboard.module.css";

const RightDashboard = () => {
  return (
    <>
      <div className={StylesRightDashboard.RightDashboard}>
        <div className={StylesRightDashboard.image}>
          <img
            src="Assets/Homepagedefault.png"
            alt="img"
            style={{ width: "50vw" }}
          />
          <div>
            <div className={StylesRightDashboard.HomeImgText1}>Pocket Notes</div>
            <div className={StylesRightDashboard.HomeImgText2}>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
          </div>
          <div className={StylesRightDashboard.encryptionimage}><img src="Assets/EncryptionLockImg.png" alt="endToEndEncryptedImage"/> end-to-end encrypted</div>
        </div>
          </div>
    </>
  );
};

export default RightDashboard;
