import React from 'react';

declare namespace IIcon {
  interface svgList {
    hierarchy: React.ReactNode;
    scene: React.ReactNode;
    console: React.ReactNode;
    verticalDots: React.ReactNode;
    handTool: React.ReactNode;
    moveTool: React.ReactNode;
    rotateTool: React.ReactNode;
    scaleTool: React.ReactNode;
    rectTool: React.ReactNode;
    multiTool: React.ReactNode;
    pivotTool: React.ReactNode;
    search: React.ReactNode;
    lightTheme: React.ReactNode;
    dropdown: React.ReactNode;
    component: React.ReactNode;
    arrow: React.ReactNode;
    settings: React.ReactNode;
    help: React.ReactNode;
    folder: React.ReactNode;
    openFolder: React.ReactNode;
    xitob: React.ReactNode;
    warning: React.ReactNode;
    bigWarning: React.ReactNode;
    bigError: React.ReactNode;
    error: React.ReactNode;
    transform: React.ReactNode;
    code: React.ReactNode;
    arrowRight: React.ReactNode;
    bigFolder: React.ReactNode;
    plus: React.ReactNode;
    tag: React.ReactNode;

    // files
    scssFile: React.ReactNode;
    jsFile: React.ReactNode;
    cssFile: React.ReactNode;
    htmlFile: React.ReactNode;
    tsFile: React.ReactNode;
    tsxFile: React.ReactNode;
    gitFile: React.ReactNode;
    jsonFile: React.ReactNode;
  }

  type name = keyof svgList;

  interface props {
    name: name;
  }
}

export default IIcon;
