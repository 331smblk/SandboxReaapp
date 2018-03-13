<template>
  <div>
      <top-nav-bar></top-nav-bar>


        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-two-thirds">
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
                <img height="44px" width="44px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojQkRCREJEOyIgcG9pbnRzPSI0NjQuMjcxLDM3My4xNTMgNDY0LjI3MSw1MTIgNDcuNzI5LDUxMiA0Ny43MjksNDQyLjU3NiAiLz4KPHJlY3QgeD0iNDcuNzI5IiB5PSI0NjguNjEiIHN0eWxlPSJmaWxsOiNBQkFCQUI7IiB3aWR0aD0iNDE2LjU0MiIgaGVpZ2h0PSIxNy4zNTYiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0Q5RDlEOTsiIHBvaW50cz0iNDY0LjI3MSwzNC43MTIgNDY0LjI3MSwzNzMuMTUzIDM5NC44NDcsNDQyLjU3NiA0Ny43MjksNDQyLjU3NiA0Ny43MjksMzQuNzEyICIvPgo8cmVjdCB4PSI0Ny43MjkiIHk9IjI2LjAzNCIgc3R5bGU9ImZpbGw6I0RFNEMzQzsiIHdpZHRoPSI0MTYuNTQyIiBoZWlnaHQ9Ijk1LjQ1OCIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMxMjYwOTk7IiBkPSJNMTI1LjgzMSw2OS40MjRjLTQuNzksMC04LjY3OC0zLjg4OC04LjY3OC04LjY3OFY4LjY3OGMwLTQuNzksMy44ODgtOC42NzgsOC42NzgtOC42NzggICBzOC42NzgsMy44ODgsOC42NzgsOC42Nzh2NTIuMDY4QzEzNC41MDgsNjUuNTM2LDEzMC42MjEsNjkuNDI0LDEyNS44MzEsNjkuNDI0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzEyNjA5OTsiIGQ9Ik0zODYuMTY5LDY5LjQyNGMtNC43OSwwLTguNjc4LTMuODg4LTguNjc4LTguNjc4VjguNjc4YzAtNC43OSwzLjg4OC04LjY3OCw4LjY3OC04LjY3OCAgIHM4LjY3OCwzLjg4OCw4LjY3OCw4LjY3OHY1Mi4wNjhDMzk0Ljg0Nyw2NS41MzYsMzkwLjk2LDY5LjQyNCwzODYuMTY5LDY5LjQyNHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMxMjYwOTk7IiBkPSJNMjEyLjYxLDY5LjQyNGMtNC43OSwwLTguNjc4LTMuODg4LTguNjc4LTguNjc4VjguNjc4YzAtNC43OSwzLjg4OC04LjY3OCw4LjY3OC04LjY3OCAgIHM4LjY3OCwzLjg4OCw4LjY3OCw4LjY3OHY1Mi4wNjhDMjIxLjI4OCw2NS41MzYsMjE3LjQsNjkuNDI0LDIxMi42MSw2OS40MjR6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMTI2MDk5OyIgZD0iTTI5OS4zOSw2OS40MjRjLTQuNzksMC04LjY3OC0zLjg4OC04LjY3OC04LjY3OFY4LjY3OGMwLTQuNzksMy44ODgtOC42NzgsOC42NzgtOC42NzggICBzOC42NzgsMy44ODgsOC42NzgsOC42Nzh2NTIuMDY4QzMwOC4wNjgsNjUuNTM2LDMwNC4xOCw2OS40MjQsMjk5LjM5LDY5LjQyNHoiLz4KPC9nPgo8cG9seWxpbmUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iNDY0LjI3MSwzNzMuMTUzIDM5NC44NDcsMzczLjE1MyAzOTQuODQ3LDQ0Mi41NzYgNDY0LjI3MSwzNzMuMTUzICIvPgo8Zz4KCTxyZWN0IHg9IjI5MC43MTIiIHk9IjE4Mi4yMzciIHN0eWxlPSJmaWxsOiM0Mzk4RDE7IiB3aWR0aD0iNjkuNDI0IiBoZWlnaHQ9IjY5LjQyNCIvPgoJPHJlY3QgeD0iMTUxLjg2NCIgeT0iMzIxLjA4NSIgc3R5bGU9ImZpbGw6IzQzOThEMTsiIHdpZHRoPSI2OS40MjQiIGhlaWdodD0iNjkuNDI0Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQkRCREJEOyIgZD0iTTQyOS41NTksMTczLjU1OUgxNTEuODY0Yy00Ljc5LDAtOC42NzgsMy44ODgtOC42NzgsOC42Nzh2NjAuNzQ2SDgyLjQ0MSAgIGMtNC43OSwwLTguNjc4LDMuODg4LTguNjc4LDguNjc4djEzOC44NDdjMCw0Ljc5LDMuODg4LDguNjc4LDguNjc4LDguNjc4aDIwOC4yNzFjNC43OSwwLDguNjc4LTMuODg4LDguNjc4LTguNjc4di02MC43NDZoMTMwLjE2OSAgIGM0Ljc5LDAsOC42NzgtMy44ODgsOC42NzgtOC42NzhWMTgyLjIzN0M0MzguMjM3LDE3Ny40NDcsNDM0LjM1LDE3My41NTksNDI5LjU1OSwxNzMuNTU5eiBNNDIwLjg4MSwyNDIuOTgzaC01Mi4wNjh2LTUyLjA2OCAgIGg1Mi4wNjhWMjQyLjk4M3ogTTI4Mi4wMzQsMzEyLjQwN2gtNTIuMDY4di01Mi4wNjhoNTIuMDY4VjMxMi40MDd6IE0xNjAuNTQyLDMxMi40MDd2LTUyLjA2OGg1Mi4wNjh2NTIuMDY4SDE2MC41NDJ6ICAgIE0yMTIuNjEsMzI5Ljc2M3Y1Mi4wNjhoLTUyLjA2OHYtNTIuMDY4SDIxMi42MXogTTIyOS45NjYsMjQyLjk4M3YtNTIuMDY4aDUyLjA2OHY1Mi4wNjhIMjI5Ljk2NnogTTI5OS4zOSwxOTAuOTE1aDUyLjA2OHY1Mi4wNjggICBIMjk5LjM5VjE5MC45MTV6IE0xNjAuNTQyLDE5MC45MTVoNTIuMDY4djUyLjA2OGgtNTIuMDY4VjE5MC45MTV6IE0xNDMuMTg2LDI2MC4zMzl2NTIuMDY4SDkxLjExOXYtNTIuMDY4SDE0My4xODZ6ICAgIE05MS4xMTksMzI5Ljc2M2g1Mi4wNjh2NTIuMDY4SDkxLjExOVYzMjkuNzYzeiBNMjgyLjAzNCwzODEuODMxaC01Mi4wNjh2LTUyLjA2OGg1Mi4wNjhWMzgxLjgzMXogTTI5OS4zOSwyNjAuMzM5aDUyLjA2OHY1Mi4wNjggICBIMjk5LjM5VjI2MC4zMzl6IE0zNjguODE0LDMxMi40MDd2LTUyLjA2OGg1Mi4wNjh2NTIuMDY4SDM2OC44MTR6Ii8+Cgk8cmVjdCB4PSIzMTYuNzQ2IiB5PSIzNDcuMTE5IiBzdHlsZT0iZmlsbDojQkRCREJEOyIgd2lkdGg9IjI2LjAzNCIgaGVpZ2h0PSIyNi4wMzQiLz4KCTxyZWN0IHg9Ijk5Ljc5NyIgeT0iMTk5LjU5MyIgc3R5bGU9ImZpbGw6I0JEQkRCRDsiIHdpZHRoPSIyNi4wMzQiIGhlaWdodD0iMjYuMDM0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                {{ $route.name}}</p>
                  

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
import CardCalendar from '../Listings/CardCalendar.vue'
import MainSideNav from '../../components/UIElements/MainSideNav.vue'
import BreadCrumbs from '../../components/UIElements/BreadCrumbs.vue'

export default {
  name: 'CalendarIndex',
  components: {
    TopNavBar,
    ContentWrapper,
    CardCalendar,
    MainSideNav,
    BreadCrumbs
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
