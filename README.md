# Set Comp Durations

## Purpose

This script sets the duration of all compositions in an After Effects project to match the duration of a selected footage item. It also has functionality (currently commented out) to rename the selected footage item based on its source file name.

## How to Use

### Installation

Place the `Set_Comp_Durations_v2.0.jsx` file into your After Effects Scripts folder. This is typically found at:

*   Windows: `Program Files\Adobe\Adobe After Effects <version>\Support Files\Scripts`
*   macOS: `Applications/Adobe After Effects <version>/Scripts`

### Running the script

1.  Open your After Effects project.
2.  Select the primary footage item in the Project panel whose duration you want to use for all compositions.
3.  Then, go to `File > Scripts > Set_Comp_Durations_v2.0.jsx`.

### Important

Ensure a footage item is selected in the project panel before running the script, otherwise, an alert will appear.

## Features

*   Automatically sets the duration of every composition in the current After Effects project to the duration of the selected footage.
*   Includes (currently commented out) code to rename the selected footage item, removing the last 16 characters from its source file name.

## Version History

*   v2.0: Initial version by Shannon Gold.

## Author

*   Shannon Gold

## Disclaimer/Notes

*   It's always a good practice to save your After Effects project before running any script.
*   Test the script on a copy of your project first if you are unsure.
