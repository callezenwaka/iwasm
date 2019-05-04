<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/callis_ezenwaka.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <img class="profile-image img-responsive img-circle pull-left" style="border-radius: 50%;" src="../assets/callis_ezenwaka.jpg" alt="Callistus Ezenwaka" />
      <div class="profile__content">
        <h1 class="name">Callistus Ezenwaka</h1>
        <h3 class="desc">Biomedical Engr. (B Eng), AI/ML Researcher, Software and Embedded System Engineer</h3>
        <h4 class="desc subdesc">Business Development Intern @ GE Healthcare</h4>
        <h4 class="desc subdesc">Facebook Pytorch Scholar 2018</h4>
        <ul class="social">
          <li><a target="_blank" rel="noopener" href="https://www.github.com/callezenwaka" title="Github">
            <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg class="social__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
                  c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
                  c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
                  c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
                  c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
                  c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
                  c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
                  c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
                  c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/>
              </g>
            </g>
            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg></a>
          </li>
          <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/callezenwaka" title="Linkedin">
            <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg class="social__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 382 382" style="enable-background:new 0 0 382 382;" xml:space="preserve">
              <path :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
              C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
              H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
              c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
              s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
              c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
              c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
              c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
              L341.91,330.654L341.91,330.654z"/>
              <!-- <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> -->
            </svg></a>
          </li>
          <li><a target="_blank" rel="noopener" href="https://www.twitter.com/callezenwaka" title="Twitter">
            <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg class="social__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;" xml:space="preserve">
              <path :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
              l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
              c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
              c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
              c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
              c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
              c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
              c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
              c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
              c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
              c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
              c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
              l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"/>
              <!-- <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> -->
            </svg></a>
          </li>
          <li class="last-item"><a href="mailto:callistus.ezenwaka@ge.com" title="Email">
            <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg class="social__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve">
              <g>
                <g>
                  <path :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/>
                  <path :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8L13.684,2.271z"/>
                  <polygon :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" points="0,2.878 0,11.186 4.833,7.079 		"/>
                  <polygon :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" points="9.167,7.079 14,11.186 14,2.875 		"/>
                </g>
              </g>
              <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- GENERAL INFORMATION -->
    <div class="general__info">
      <h2 class="heading">General Information</h2>
      <div class="content">
        <ul class="list-unstyled">
          <li>Business Development (Sales) Intern, GE Healthcare</li>
        </ul>
      </div><!--//content-->
    </div>
    <!-- QUALIFICATIONS AND ACHIEVEMENTS -->
    <div class="qualifications">
      <!-- EDUCATION -->
      <div class="education">
        <h2 class="heading">
          <svg class="icons" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="544.316px" height="544.316px" viewBox="0 0 544.316 544.316" style="enable-background:new 0 0 544.316 544.316;" xml:space="preserve">
            <g>
              <g>
                <path :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" d="M272.164,340.276L89.452,274.884l0.625,119.831c0,0,85.447,43.077,182.087,43.077
                  c100.907,0,182.718-50.808,182.718-50.808l-0.76-112.006L272.164,340.276z"/>
                <polygon :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" points="510.149,229.122 544.316,216.616 272.164,106.524 0,216.616 272.164,316.279 489.527,236.677 489.527,352.607 
                  475.795,352.607 475.795,408.354 521.312,408.354 521.312,352.607 510.149,352.607 		"/>
              </g>
            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
          </svg>
          <span>Educational</span>
        </h2>
        <ul class="">
          <li>Introduction to Project Management</li>
          <li>University of Adelaide, edx.org (April 2019)</li>
        </ul><br>
        <ul class="">
          <li>First Class Honour in B.Eng. Degree, Biomedical Engineering</li>
          <li>University Scholar, University of Ilorin (2012 - 2017)</li>
        </ul>
      </div>

      <!-- RESEARCH -->
      <div class="research">
        <h2 class="heading">
          <svg class="icons" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.057 16.057" style="enable-background:new 0 0 16.057 16.057;" xml:space="preserve">
            <g>
              <path :class="{dark__fill__color : isDarkTheme, White__fill__color : isWhiteTheme}" d="M9.194,8.744c0.461,0,0.835,0.374,0.835,0.835s-0.374,0.835-0.835,0.835S8.359,10.04,8.359,9.579
              C8.359,9.118,8.733,8.744,9.194,8.744z M6.807,8.315c-0.449,0-0.813,0.364-0.813,0.813s0.364,0.813,0.813,0.813
              c0.449,0,0.813-0.364,0.813-0.813S7.256,8.315,6.807,8.315z M9.098,7.695c0-0.329-0.267-0.596-0.596-0.596S7.906,7.366,7.906,7.695
              c0,0.329,0.267,0.596,0.596,0.596S9.098,8.024,9.098,7.695z M13.771,16.057H2.285c-1.616,0-2.173-1.38-1.667-2.882
              c0,0,1.991-3.712,5.237-9.04V1.05h-0.2C5.364,1.051,5.128,0.815,5.128,0.526C5.129,0.237,5.364,0.001,5.655,0l4.75,0.001
              C10.694,0,10.93,0.236,10.93,0.526c0,0.289-0.236,0.524-0.525,0.524h-0.201v3.086c3.246,5.328,5.236,9.028,5.236,9.028
              C15.945,14.666,15.389,16.057,13.771,16.057z M12.919,10.981c-0.527-0.954-2.886-5.041-3.648-6.289l-0.127-0.21H6.913l-0.127,0.21
              c-0.828,1.36-3.32,5.714-3.658,6.289H12.919z"/>
            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
          </svg>
              <span>Research-based Project(s)</span></h2>
        <ul class="">
          <li>Facebook Pytorch Scholar 2018</li>
          <li>Funded by Facebook AI, udacity.com (Nov. - Dev. 2018)</li>
        </ul><br>
        <ul class="">
          <li>Investigated the physiological changes and effect of caffeine to cardiovascular system</li>
          <li>University of Ilorin (Aug. 2018)</li>
        </ul>
      </div>
      <!-- INTEREST -->
      <div class="interest">
        <h2 class="heading">Research Interests</h2>
        <ul class="interest__list">
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>  
              <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
            <span>Embedded Systems</span>
          </li>
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>
              <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> 
            </svg>
            <span>Systems Automation</span>
          </li>
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>  
              <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
            <span>Machine Learning</span>
          </li>
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>
              <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
            <span>Tackling the Challenges of Big Data:</span>
            <ul style="margin-left: 1.5em;">
              <li>
                <svg class="check" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve">
                  <rect style="fill:#E7ECED;" width="58" height="58"/>
                  <polyline style="fill:none;stroke:#424A60;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="42,20 26,38 16,30 "/>
                  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> 
                </svg>
                <span>Visualization</span>
              </li>
              <li>
                <svg class="check" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve">
                  <rect style="fill:#E7ECED;" width="58" height="58"/>
                  <polyline style="fill:none;stroke:#424A60;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="42,20 26,38 16,30 "/> 
                  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> 
                </svg>
                <span>Processing</span>
              </li>
              <li>
                <svg class="check" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve">
                  <rect style="fill:#E7ECED;" width="58" height="58"/>
                  <polyline style="fill:none;stroke:#424A60;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="42,20 26,38 16,30 "/> 
                  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> 
                </svg>
                <span>Analytic</span>
              </li>
            </ul>
          </li>
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>  
            </svg>
            <span>Data Fusion</span>
          </li>
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>  
            </svg>
            <span>Artificial Intelligence</span>
          </li>
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>  
            </svg>
            <span>Deep Learning</span>
          </li>
          <li>
            <svg class="check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.67 426.67" style="enable-background:new 0 0 426.67 426.67;" xml:space="preserve">  
              <path style="fill:#F05228;" d="M153.504,366.839c-8.657,0-17.323-3.302-23.927-9.911L9.914,237.265
              c-13.218-13.218-13.218-34.645,0-47.863c13.218-13.218,34.645-13.218,47.863,0l95.727,95.727l215.39-215.386
              c13.218-13.214,34.65-13.218,47.859,0c13.222,13.218,13.222,34.65,0,47.863L177.436,356.928
              C170.827,363.533,162.165,366.839,153.504,366.839z"/>  
            </svg>
            <span>Medical Image Processing and Computer Vision</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      isWhiteTheme: false
    }
  },
  watch: {
    isDarkTheme() {
      this.isWhiteTheme = !this.isDarkTheme.checked
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
    // isWhiteTheme: function() {
    //   return !this.isDarkTheme ;
    // }
  },
  created () {
    if (this.isDarkTheme) {
      this.isWhiteTheme = !this.isDarkTheme.checked
    }
  }
}
</script>

<style scoped>
.home {
  line-height: 2em;
}
.dark--theme--social--icon--fill--color {
  fill:#FFFFFF;
}
.dark__fill__color {
  fill:#FFFFFF;
}
.White--theme--social--icon--fill--color {
  fill:#801515;
}
.White__fill__color {
  fill:#801515;
}
.anchor__link {
  color: #000000;
}
.check {
  height: 1em;
  width: 1em;
  margin-right: 1em;
}
.icons {
  height: 1em;
  width: 1em;
  margin-right: 1em
}
.container {
	/* width: 100%; */
  margin: 20px 10px;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
}
.container:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.profile__content {
  line-height: 2em;
}
.social {
  display: inline-flex;
  flex-wrap:wrap;text-align: center;
}
.social__icon {
  width: 2.5em;
  height: 2.5em;
  padding: 0;
  margin: 0.5em 1em;
}
.general__info {
  /* width: 100%; */
  margin: 20px 10px;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
}
.general__info:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.education {
  margin: 20px 10px;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
}
.education:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.research:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.research {
  margin: 20px 10px;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
}
.research:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.interest {
  margin: 20px 10px;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
}
.interest:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.interest__list {
  text-align: left;
}
@media only screen and (min-width: 690px) and (max-width: 964px) {
.interest__list {
  margin: auto 25%;
}
}
@media only screen and (min-width: 964px) {
.home {
  margin: 20px 14em;
}
.interest__list {
  margin: auto 35%;
}
}
</style>
