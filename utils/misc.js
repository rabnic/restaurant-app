export const getTimeOfDay = () => {
    var today = new Date();
    var currentHour = today.getHours();
  
    if (currentHour < 12) {
      return "morning";
    } else if (currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }
  