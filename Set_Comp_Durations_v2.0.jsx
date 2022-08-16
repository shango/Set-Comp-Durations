// Set_Comp_Durations v01
// Sets all comp durations to the duration of the selected footage.
// by Shannon Gold

function chageCompsDuration() {
    var selectedClip = app.project.activeItem;
    if(selectedClip == null) {
      alert("Select the MAIN SEQUENCE clip in project window, and run script again.");
    } else {
        for (var i = 1; i <= app.project.numItems; i++) {
          if (app.project.item(i) instanceof CompItem) {
              var curComp = app.project.item(i);
              curComp.duration = selectedClip.duration;
            }
        }
       # var newName = selectedClip.mainSource.file.name;
       # selectedClip.name = newName.slice(0, -16);

        alert("It worked! \n Comp length changed. \n Set_Comp_Duration v2.0 by Shannon");
    }
}
chageCompsDuration();
