import  classes  from "./profile.module.css";
export const Profile = () => {
  return (
    <>
    <div className={classes.profileContent}>
    <h1>Your Profile</h1>
    <p>You Can Change Your Personal Info and Check your bookmarked cars </p>
    </div>
      <div className={classes.tab}>
        <button
          className={classes.tablinks}
          
        >
         personal Info
        </button>
        <button className={classes.tablinks} >
          Bookmarks
        </button>
        <button className={classes.tablinks} >
          Next Trips
        </button>
      </div>

      <div id="London" className={classes.tabcontent}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className={classes.tabcontent}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className={classes.tabcontent}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
  );
};
