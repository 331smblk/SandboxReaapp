<template>
  <div>
      <top-nav-bar></top-nav-bar>



        <div class="container is-fluid">
          <div class="columns">
            <div class="column ">
               <bread-crumbs></bread-crumbs>
            </div>
          </div>
        </div>
        
        
        

        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-one-quarter">
              <main-side-nav></main-side-nav>
            </div>
            <div class="column">

              <p class="title">
                <img height="44px" width="44px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4MCA0ODA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRDQ1QjVCOyIgZD0iTTUxLjUzMSwzMzkuMDE2Yy0wLjA0LDAuMDI0LTAuMDg4LDAuMDQtMC4xMzYsMC4wNzJDNTEuNDQzLDMzOS4wNjQsNTEuNDkxLDMzOS4wNDgsNTEuNTMxLDMzOS4wMTZ6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0IzRDVFNDsiIGQ9Ik0zNjcuMzA3LDQ3MlY4aC0zMjB2MjcybDQwLTQwbDgsOGwxOS40OC0xOS40OGwwLDBjLTcuMjE2LTEwLjM2LTExLjQ4LTIyLjkzNi0xMS40OC0zNi41MiAgIGMwLTM1LjM0NCwyOC42NTYtNjQsNjQtNjRjMjQuMTEyLDAsNDUuMDg4LDEzLjM0NCw1NiwzMy4wNFY0MGgxMTJ2MTM2aC0xNmgtODBoLTEwLjA5NmwwLDBjMS4zMiw1LjEyLDIuMDk2LDEwLjQ2NCwyLjA5NiwxNiAgIGMwLDM1LjM0NC0yOC42NTYsNjQtNjQsNjRjLTEzLjU4NCwwLTI2LjE2LTQuMjY0LTM2LjUyLTExLjQ4bDAsMEwxMTEuMzA3LDI2NGw4LDhsLTY0LDY0Yy0xLjE2OCwxLjE2OC0yLjQ0LDIuMTYtMy43NzYsMy4wMTYgICBjLTAuMDQsMC4wMjQtMC4wODgsMC4wNC0wLjEzNiwwLjA3MmMtMS4zMDQsMC44MzItMi42NzIsMS40OTYtNC4wODgsMi4wMzJWNDcySDM2Ny4zMDd6IE03MS4zMDcsODBoNzJINzEuMzA3eiBNMTU5LjMwNyw4MGgzMiAgIEgxNTkuMzA3eiBNNzEuMzA3LDQ4aDEyMEg3MS4zMDd6IE0xNTkuMzA3LDM4NGgxODRIMTU5LjMwN3ogTTM0My4zMDcsMjg4aC0yMDBIMzQzLjMwN3ogTTM0My4zMDcsMzIwaC0xNTJIMzQzLjMwN3ogTTE3NS4zMDcsMzIwICAgaC03MkgxNzUuMzA3eiBNMzQzLjMwNywzNTJoLTI3MkgzNDMuMzA3eiBNMTQzLjMwNywzODRoLTcySDE0My4zMDd6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQjNENUU0OyIgZD0iTTEzMC43ODcsMjQ0LjUyYzEwLjM2LDcuMjE2LDIyLjkzNiwxMS40OCwzNi41MiwxMS40OGMzNS4zNDQsMCw2NC0yOC42NTYsNjQtNjQgICBjMC01LjUzNi0wLjc3Ni0xMC44OC0yLjA5Ni0xNmMtMS4zNi01LjI3Mi0zLjMyLTEwLjMwNC01LjkwNC0xNC45NmwwLDBjLTEwLjkxMi0xOS42OTYtMzEuODg4LTMzLjA0LTU2LTMzLjA0ICAgYy0zNS4zNDQsMC02NCwyOC42NTYtNjQsNjRjMCwxMy41ODQsNC4yNjQsMjYuMTYsMTEuNDgsMzYuNTJDMTE5LjEzMSwyMzQuNzUyLDEyNC41NTUsMjQwLjE3NiwxMzAuNzg3LDI0NC41MnogTTE2Ny4zMDcsMTUyICAgYy0yMi4wODgsMC00MCwxNy45MTItNDAsNDBDMTI3LjMwNywxNjkuOTEyLDE0NS4yMTksMTUyLDE2Ny4zMDcsMTUyeiIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Q0NUI1QjsiIGQ9Ik0xMzAuNzg3LDI0NC41MkwxMzAuNzg3LDI0NC41MmMtNi4yNC00LjM0NC0xMS42NTYtOS43Ni0xNi0xNmwwLDBMOTUuMzA3LDI0OGwxNiwxNkwxMzAuNzg3LDI0NC41MiAgIHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENDVCNUI7IiBkPSJNMTMwLjc4NywyNDQuNTJjLTYuMjMyLTQuMzQ0LTExLjY0OC05Ljc2LTE1Ljk5Mi0xNS45OTIgICBDMTE5LjEzMSwyMzQuNzUyLDEyNC41NTUsMjQwLjE3NiwxMzAuNzg3LDI0NC41MnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENDVCNUI7IiBkPSJNNTEuMzk1LDMzOS4wODhjMC4wNC0wLjAyNCwwLjA4OC0wLjA0LDAuMTM2LTAuMDcyYzEuMzM2LTAuODQ4LDIuNjA4LTEuODQ4LDMuNzc2LTMuMDE2bDY0LTY0bC04LTggICBsLTE2LTE2bC04LThsLTQwLDQwbC0yNCwyNGMtOC44NCw4Ljg0LTguODQsMjMuMTYsMCwzMmM2LjQ4OCw2LjQ4OCwxNS45MzYsOC4xNjgsMjQsNS4xMmwwLDAgICBDNDguNzIzLDM0MC41OTIsNTAuMDkxLDMzOS45MDQsNTEuMzk1LDMzOS4wODh6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRDQ1QjVCOyIgZD0iTTQ3LjMwNywzNDEuMTJMNDcuMzA3LDM0MS4xMmMxLjQxNi0wLjUzNiwyLjc4NC0xLjIwOCw0LjA4OC0yLjAzMiAgIEM1MC4wOTEsMzM5LjkwNCw0OC43MjMsMzQwLjU5Miw0Ny4zMDcsMzQxLjEyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Q0NUI1QjsiIGQ9Ik01NS4zMDcsMzM2Yy0xLjE2OCwxLjE2OC0yLjQ0LDIuMTY4LTMuNzc2LDMuMDE2QzUyLjg2NywzMzguMTYsNTQuMTM5LDMzNy4xNjgsNTUuMzA3LDMzNnoiLz4KPC9nPgo8Zz4KCTxyZWN0IHg9IjM2Ny4zMDciIHk9IjgiIHN0eWxlPSJmaWxsOiNCM0Q1RTQ7IiB3aWR0aD0iNDgiIGhlaWdodD0iNDY0Ii8+Cgk8cmVjdCB4PSI0MTUuMzA3IiB5PSI4IiBzdHlsZT0iZmlsbDojQjNENUU0OyIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ2NCIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Q0NUI1QjsiIGQ9Ik0yMjkuMjExLDE3NmgxMC4wOTZ2LTE2YzAtMjIuMDg4LDE3LjkxMi00MCw0MC00MGMtMTMuMjU2LDAtMjQtMTAuNzQ0LTI0LTI0czEwLjc0NC0yNCwyNC0yNCAgIHMyNCwxMC43NDQsMjQsMjRzLTEwLjc0NCwyNC0yNCwyNGMyMi4wODgsMCw0MCwxNy45MTIsNDAsNDB2MTZoMTZWNDBoLTExMnYxMjEuMDRDMjI1Ljg4MywxNjUuNjk2LDIyNy44NTEsMTcwLjcyLDIyOS4yMTEsMTc2ICAgTDIyOS4yMTEsMTc2eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Q0NUI1QjsiIGQ9Ik0yMjkuMjExLDE3NmMtMS4zNi01LjI3Mi0zLjMyLTEwLjMwNC01LjkwNC0xNC45NmwwLDBDMjI1Ljg4MywxNjUuNjk2LDIyNy44NTEsMTcwLjcyLDIyOS4yMTEsMTc2eiAgICIvPgo8L2c+CjxnPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTREOUIzOyIgY3g9IjI3OS4zMDciIGN5PSI5NiIgcj0iMjQiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNEQ5QjM7IiBkPSJNMjc5LjMwNywxMjBjLTIyLjA4OCwwLTQwLDE3LjkxMi00MCw0MHYxNmg4MHYtMTZDMzE5LjMwNywxMzcuOTEyLDMwMS4zOTUsMTIwLDI3OS4zMDcsMTIweiIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMzc0RTsiIGQ9Ik00Ny4zMDcsNDgwaDMyMGg0OGg0OGM0LjQyNCwwLDgtMy41ODQsOC04VjhjMC00LjQxNi0zLjU3Ni04LTgtOGgtNDhoLTQ4aC0zMjAgICBjLTQuNDI0LDAtOCwzLjU4NC04LDh2MjY4LjY4OGwtMjEuNjU2LDIxLjY1NmMtMTEuOTQ0LDExLjk0NC0xMS45NDQsMzEuMzY4LDAsNDMuMzEyYzUuOTY4LDUuOTc2LDEzLjgxNiw4Ljk2LDIxLjY1Niw4Ljk2VjQ3MiAgIEMzOS4zMDcsNDc2LjQxNiw0Mi44ODMsNDgwLDQ3LjMwNyw0ODB6IE00NTUuMzA3LDQ2NGgtMzJWMTZoMzJWNDY0eiBNNDA3LjMwNyw0NjRoLTMyVjE2aDMyVjQ2NHogTTI4Ljk2MywzMzAuMzQ0ICAgYy01LjcwNC01LjcwNC01LjcwNC0xNC45ODQsMC0yMC42ODhsMjQtMjRsMzQuMzQ0LTM0LjM0NGwyLjM0NCwyLjM0NGwxNiwxNmwyLjM0NCwyLjM0NGwtNTguMzQ0LDU4LjM0NCAgIGMtMS40NCwxLjQzMi0zLjE2OCwyLjU0NC01LjE2OCwzLjI5NmMtMC4wMTYsMC4wMDgtMC4wMjQsMC4wMTYtMC4wNCwwLjAyNEMzOS4yMzUsMzM1LjYwOCwzMy4xMzksMzM0LjUyLDI4Ljk2MywzMzAuMzQ0eiAgICBNMjYzLjMwNyw5NmMwLTguODI0LDcuMTc2LTE2LDE2LTE2czE2LDcuMTc2LDE2LDE2cy03LjE3NiwxNi0xNiwxNlMyNjMuMzA3LDEwNC44MjQsMjYzLjMwNyw5NnogTTI3OS4zMDcsMTI4ICAgYzE3LjY0OCwwLDMyLDE0LjM1MiwzMiwzMnY4aC02NHYtOEMyNDcuMzA3LDE0Mi4zNTIsMjYxLjY1OSwxMjgsMjc5LjMwNywxMjh6IE0zMDIuNDUxLDExNy45NzYgICBjNS40NTYtNS43NDQsOC44NTYtMTMuNDU2LDguODU2LTIxLjk3NmMwLTE3LjY0OC0xNC4zNTItMzItMzItMzJzLTMyLDE0LjM1Mi0zMiwzMmMwLDguNTIsMy40LDE2LjIzMiw4Ljg1NiwyMS45NzYgICBjLTE0LjU2OCw4LjA1Ni0yNC40OTYsMjMuNDU2LTI0LjgwOCw0MS4xNjhjLTAuMDE2LTAuMDMyLTAuMDI0LTAuMDcyLTAuMDQtMC4xMDRWNDhoOTZ2MTEyICAgQzMyNy4zMDcsMTQxLjkyLDMxNy4yNTksMTI2LjE2LDMwMi40NTEsMTE3Ljk3NnogTTIxNi4zNzksMTY1LjA3MmMxLjA1NiwxLjkyOCwyLjAxNiwzLjk1MiwyLjg1Niw2LjA2NCAgIGMwLjAyNCwwLjA1NiwwLjA0LDAuMTIsMC4wNjQsMC4xNzZjMC44MzIsMi4xMjgsMS41NTIsNC4zMzYsMi4xNTIsNi42MTZjMS4xNjgsNC41MTIsMS44NTYsOS4yMDgsMS44NTYsMTQuMDcyICAgYzAsMzAuODgtMjUuMTI4LDU2LTU2LDU2Yy0xMS45OTIsMC0yMy4wOC0zLjgyNC0zMi4yMDgtMTAuMjY0Yy01LjI1Ni0zLjcwNC05Ljc5Mi04LjI0LTEzLjUwNC0xMy40OTYgICBjLTYuNDU2LTkuMTI4LTEwLjI4OC0yMC4yMzItMTAuMjg4LTMyLjI0YzAtMzAuODgsMjUuMTI4LTU2LDU2LTU2QzE4OC40MjcsMTM2LDIwNi44NDMsMTQ3Ljc2LDIxNi4zNzksMTY1LjA3MnogTTExNC4xMzksMjQwLjQ5NiAgIGMwLjM3NiwwLjQxNiwwLjgsMC43ODQsMS4xODQsMS4xODRjMC43MzYsMC43NzYsMS40ODgsMS41MjgsMi4yNjQsMi4yNzJjMC40MTYsMC40LDAuOCwwLjg0LDEuMjMyLDEuMjMybC03LjUxMiw3LjUwNEwxMDYuNjE5LDI0OCAgIEwxMTQuMTM5LDI0MC40OTZ6IE02MC45NjMsMzQxLjY1Nmw2NC02NGMzLjEyOC0zLjEyOCwzLjEyOC04LjE4NCwwLTExLjMxMkwxMjIuNjE5LDI2NGw5LjM0NC05LjM0NCAgIGMxMC40NTYsNS45MiwyMi40OTYsOS4zNDQsMzUuMzQ0LDkuMzQ0YzM5LjcwNCwwLDcyLTMyLjMwNCw3Mi03MmMwLTIuNzA0LTAuMTc2LTUuMzY4LTAuNDcyLThoMC40NzJoODBoMTZjNC40MjQsMCw4LTMuNTg0LDgtOFY0MCAgIGMwLTQuNDE2LTMuNTc2LTgtOC04aC0xMTJjLTQuNDI0LDAtOCwzLjU4NC04LDh2OTguNDg4Yy0xMi43NTItMTEuNDU2LTI5LjU1Mi0xOC40ODgtNDgtMTguNDg4Yy0zOS43MDQsMC03MiwzMi4zMDQtNzIsNzIgICBjMCwxMi44NDgsMy40MjQsMjQuODk2LDkuMzQ0LDM1LjM0NGwtOS4zNDQsOS4zNDRsLTIuMzQ0LTIuMzQ0Yy0zLjEyOC0zLjEyOC04LjE4NC0zLjEyOC0xMS4zMTIsMGwtMjYuMzQ0LDI2LjM0NFYxNmgzMDR2NDQ4aC0zMDQgICBWMzQ2LjA5NmMwLjA5Ni0wLjA1NiwwLjE2OC0wLjE0NCwwLjI2NC0wLjIwOEM1Ny40NzUsMzQ0LjY4OCw1OS4zMDcsMzQzLjMyLDYwLjk2MywzNDEuNjU2eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMzc0RTsiIGQ9Ik0xMTkuMzA3LDE5MmgxNmMwLTE3LjY0OCwxNC4zNTItMzIsMzItMzJ2LTE2QzE0MC44MzUsMTQ0LDExOS4zMDcsMTY1LjUyOCwxMTkuMzA3LDE5MnoiLz4KCTxyZWN0IHg9IjcxLjMwNyIgeT0iNDAiIHN0eWxlPSJmaWxsOiMyMzM3NEU7IiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE2Ii8+Cgk8cmVjdCB4PSI3MS4zMDciIHk9IjcyIiBzdHlsZT0iZmlsbDojMjMzNzRFOyIgd2lkdGg9IjcyIiBoZWlnaHQ9IjE2Ii8+Cgk8cmVjdCB4PSIxNTkuMzA3IiB5PSI3MiIgc3R5bGU9ImZpbGw6IzIzMzc0RTsiIHdpZHRoPSIzMiIgaGVpZ2h0PSIxNiIvPgoJPHJlY3QgeD0iMTQzLjMwNyIgeT0iMjgwIiBzdHlsZT0iZmlsbDojMjMzNzRFOyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNiIvPgoJPHJlY3QgeD0iMTAzLjMwNyIgeT0iMzEyIiBzdHlsZT0iZmlsbDojMjMzNzRFOyIgd2lkdGg9IjcyIiBoZWlnaHQ9IjE2Ii8+Cgk8cmVjdCB4PSIxOTEuMzA3IiB5PSIzMTIiIHN0eWxlPSJmaWxsOiMyMzM3NEU7IiB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2Ii8+Cgk8cmVjdCB4PSI3MS4zMDciIHk9IjM0NCIgc3R5bGU9ImZpbGw6IzIzMzc0RTsiIHdpZHRoPSIyNzIiIGhlaWdodD0iMTYiLz4KCTxyZWN0IHg9IjcxLjMwNyIgeT0iMzc2IiBzdHlsZT0iZmlsbDojMjMzNzRFOyIgd2lkdGg9IjcyIiBoZWlnaHQ9IjE2Ii8+Cgk8cmVjdCB4PSIxNTkuMzA3IiB5PSIzNzYiIHN0eWxlPSJmaWxsOiMyMzM3NEU7IiB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE2Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                {{$route.name}}
                </p>
                <section>
                  <tile-table3></tile-table3>
            
                </section>
                  

              <section>
                  <article class="tile is-white  notification is-sticky-top">
                    <div class="content">
                      
                      <div class="columns">
                        <div class="column">
                          <!-- <small>Start</small> -->
                         <b-field label="Start" class="has-text-success">
                              <b-datepicker
                                  placeholder="Click to select..."
                                  icon="calendar-today">
                              </b-datepicker>
                          </b-field>
                        </div>
                        <div class="column">
                          <!-- <small>End</small> -->
                          <b-field label="End">
                              <b-datepicker
                                  placeholder="Click to select..."
                                  icon="calendar-today">
                              </b-datepicker>
                          </b-field>
                        </div>
                        
                      </div>
                          
                      </div>
                  
                  </article>
                

                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
              </section>
              <section>
                  <article class="tile box is-sticky-top">
                    <div class="content">
                      
                      <p>This Month</p>
                          
                      </div>
                  
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>
                  <article class="tile box">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                          </a>
                          <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div class="media-right">
                      <button class="delete"></button>
                    </div>
                    
                  </article>

              </section>
                  
            </div>
            
            
          </div>
        </div>
 


  </div>
</template>

<script>

import TopNavBar from '../../components/UIElements/TopNavBar.vue'
import ContentWrapper from '../../components/UIElements/ContentWrapper.vue'
import MainSideNav from '../../components/UIElements/MainSideNav.vue'
import BreadCrumbs from '../../components/UIElements/BreadCrumbs.vue'
import TileTable3 from '../../components/UIElements/Tiles/TileTable3.vue'

export default {
  name: 'ListingsGrid',
  components: {
    TopNavBar,
    MainSideNav,
    BreadCrumbs,
    TileTable3
  },
    data() {
        return {
            
        }
    },
    computed: {
        
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
