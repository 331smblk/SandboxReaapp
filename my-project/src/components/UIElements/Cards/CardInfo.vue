<template>
  <div>
    <div class="tile is-parent">
      <article class="tile is-child box is-white">
        <div class="content">
          <p class="subtitle">
            30 W Pershing Rd,
            <small><p> Kansas City, MO 64108</p></small>
          </p>
          <div class="">
            <img src="https://bulma.io/images/placeholders/480x320.png">
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-calendar"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-eye"></i></span>
              </a>
            </div>
          </nav>
          
          <div class="content">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p><strong>Price</strong> <span class="subtitle is-pulled-right">$40,000 ~ 110,000 </span></p>
                 
                </div>
              </div>
            </article>
            <b-collapse :open="false">
               <button class="button button is-primary is-outlined  is-small" slot="trigger"><i class="fas fa-plus"></i> &nbsp;  More Info</button>
                <div class="notification">
                    <article class="media">
                      <div class="media-content">
                        <div class="content">
                          <p>
                            <small>Floor Size:</small> <strong class="is-pulled-right">5,800 sqft</strong>
                            <br>
                            <small>Lot Size:</small>  <strong class="is-pulled-right">555,800 sqft</strong>
                            <br>
                            <small>Zoned:</small> <strong class="is-pulled-right">Multi Tenant</strong>
                            <br>
                            <small>Units:</small>  <strong class="is-pulled-right">12</strong>
                            <br>
                            <small>Bedrooms /unit:</small> <strong class="is-pulled-right">2</strong>
                            <br>
                            <small>Has Ammenities:</small>  <strong class="is-pulled-right">Yes</strong>
                          </p>
                        </div>
                        <nav class="level is-mobile">
                          <div class="level-left">
                            <a class="level-item">
                              <span class="icon is-small"><i class="fas fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                              <span class="icon is-small"><i class="fas fa-heart"></i></span>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </article>
                </div>
            </b-collapse>
          </div>
        </div>
        <article class="media">
          <figure class="media-left">
            <p class="image is-32x32">
              <!-- <img src="https://bulma.io/images/placeholders/128x128.png"> -->
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxwYXRoIGQ9Ik0zMS4zNTQsMjZjMy44NiwwLDctMy4xNDEsNy03cy0zLjE0LTctNy03cy03LDMuMTQxLTcsN1MyNy40OTQsMjYsMzEuMzU0LDI2eiBNMzEuMzU0LDE0YzIuNzU3LDAsNSwyLjI0Myw1LDUgICBzLTIuMjQzLDUtNSw1cy01LTIuMjQzLTUtNVMyOC41OTcsMTQsMzEuMzU0LDE0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTMxLjE3Nyw1NC43NTdMNDYuNTE4LDMyLjZjNS43NTQtNy42NzIsNC45MjEtMjAuMjgtMS43ODEtMjYuOTgyQzQxLjExNSwxLjk5NSwzNi4yOTksMCwzMS4xNzcsMCAgIHMtOS45MzgsMS45OTUtMTMuNTYsNS42MTdjLTYuNzAzLDYuNzAyLTcuNTM2LDE5LjMxMi0xLjgwNCwyNi45NTJMMzEuMTc3LDU0Ljc1N3ogTTE5LjAzMSw3LjAzMUMyMi4yNzUsMy43ODcsMjYuNTg5LDIsMzEuMTc3LDIgICBzOC45MDEsMS43ODcsMTIuMTQ2LDUuMDMxYzYuMDQ5LDYuMDQ5LDYuNzk0LDE3LjQzNywxLjU3MywyNC4zOTlMMzEuMTc3LDUxLjI0M0wxNy40MzYsMzEuNCAgIEMxMi4yMzYsMjQuNDY4LDEyLjk4MSwxMy4wOCwxOS4wMzEsNy4wMzF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMSw1Ny41ODZsLTAuNzA3LDAuNzA3Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzAuNDg4LDU5LjkwMiwwLjc0NCw2MCwxLDYwczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDIuNDE0LDU5ICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRTMS4zOTEsNTcuMTk1LDEsNTcuNTg2eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTguNjE2LDUyYy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDEuODJjMC41NTIsMCwxLTAuNDQ3LDEtMXMtMC40NDgtMS0xLTFIOC42MTZ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNNi4yNzUsNTMuNzI1Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwbC0xLjI4NywxLjI4N2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNCAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wxLjI4Ny0xLjI4N0M2LjY2Niw1NC43NDgsNi42NjYsNTQuMTE1LDYuMjc1LDUzLjcyNXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0xOS41MzksNTJjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMS44MmMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMUgxOS41Mzl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMTQuMDc3LDUyYy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDEuODIxYzAuNTUyLDAsMS0wLjQ0NywxLTFzLTAuNDQ4LTEtMS0xSDE0LjA3N3oiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yNSw1MmMtMC41NTIsMC0xLDAuNDQ3LTEsMXMwLjQ0OCwxLDEsMWgxYzAuNTUyLDAsMS0wLjQ0NywxLTFzLTAuNDQ4LTEtMS0xSDI1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTEsNTMuNzU4YzAuMjU2LDAsMC41MTItMC4wOTgsMC43MDctMC4yOTNsMy44NzYtMy44NzZjMC4wOTUtMC4wOTUsMC4xOTktMC4xOCwwLjM0OS0wLjI3MmwwLjE5My0wLjEwNCAgIGMwLjAzNS0wLjAyMSwwLjA2OS0wLjA0MiwwLjEwNi0wLjA1OGwwLjM3NC0wLjExNUM2LjczNiw0OS4wMTUsNi44NjgsNDksNyw0OWgxNWMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMUg3ICAgYy0wLjI1NiwwLTAuNTE5LDAuMDI2LTAuNzkxLDAuMDc5QzYuMTEzLDQ3LjEsNi4wMjEsNDcuMTI4LDUuOTMsNDcuMTU4bC0wLjEzMSwwLjAzOWMtMC4xMTIsMC4wMy0wLjIyNCwwLjA2NC0wLjMyNiwwLjEwNiAgIGMtMC4xMTksMC4wNDktMC4yMzEsMC4xMDktMC4zNDIsMC4xNzNsLTAuMDk1LDAuMDUyYy0wLjA4NSwwLjA0My0wLjE2OSwwLjA4Ny0wLjI1NywwLjE0NmMtMC4yMjEsMC4xNDctMC40MjYsMC4zMTYtMC42MTEsMC41MDEgICBsLTMuODc2LDMuODc2Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzAuNDg4LDUzLjY2LDAuNzQ0LDUzLjc1OCwxLDUzLjc1OHoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik01OC4yOTMsNDguNzA3YzAuMjU2LDAsMC41MTItMC4wOTgsMC43MDctMC4yOTNsMC43MDctMC43MDdjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQsMCAgIEw1Ny41ODYsNDdjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRDNTcuNzgxLDQ4LjYwOSw1OC4wMzcsNDguNzA3LDU4LjI5Myw0OC43MDd6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNNTQuNTY2LDUwLjAybC0xLjUxLDEuNTFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTMgICBsMS41MS0xLjUxYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRTNTQuOTU3LDQ5LjYyOSw1NC41NjYsNTAuMDJ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNNDcuNjc1LDUyYy0wLjU1MywwLTEsMC40NDctMSwxczAuNDQ3LDEsMSwxaDIuMTM1YzAuNTUzLDAsMS0wLjQ0NywxLTFzLTAuNDQ3LTEtMS0xSDQ3LjY3NXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik00MS4yNyw1MmMtMC41NTIsMC0xLDAuNDQ3LTEsMXMwLjQ0OCwxLDEsMWgyLjEzNWMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMUg0MS4yN3oiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0zNiw1MmMtMC41NTIsMC0xLDAuNDQ3LTEsMXMwLjQ0OCwxLDEsMWgxYzAuNTUyLDAsMS0wLjQ0NywxLTFzLTAuNDQ4LTEtMS0xSDM2eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTU4LjI5Myw1Mi41MzVsLTMuODc2LDMuODc2Yy0wLjA5NCwwLjA5NC0wLjE5NywwLjE3OC0wLjM0NywwLjI3MWwtMC4xODgsMC4xMDJjLTAuMDQsMC4wMjItMC4wNzksMC4wNDctMC4xMTksMC4wNjMgICBjLTAuMDMxLDAuMDEzLTAuMDY0LDAuMDItMC4wOTcsMC4wMjlsLTAuMjc4LDAuMDg0QzUzLjI2MSw1Ni45ODYsNTMuMTMxLDU3LDUzLDU3SDcuODlsLTEuNTE3LDEuMjIxICAgYy0wLjQzLDAuMzQ3LTAuNDk5LDAuOTc3LTAuMTUyLDEuNDA2QzYuNDE4LDU5Ljg3Miw2LjcwOCw2MCw3LDYwYzAuMjIsMCwwLjQ0Mi0wLjA3MiwwLjYyNi0wLjIyMUw4LjU5NSw1OUg1MyAgIGMwLjI2LDAsMC41MjQtMC4wMjYsMC43NzktMC4wNzhjMC4xMDItMC4wMiwwLjE5OC0wLjA0OSwwLjI5NS0wLjA4MWwwLjEyNS0wLjAzN2MwLjExMi0wLjAzMSwwLjIyMy0wLjA2NCwwLjMzNS0wLjExMSAgIGMwLjExNy0wLjA0OSwwLjIyNy0wLjEwOCwwLjMzNy0wLjE3MWwwLjA5OS0wLjA1NGMwLjA4Ni0wLjA0MywwLjE3LTAuMDg4LDAuMjQ3LTAuMTRjMC4yMjEtMC4xNDcsMC40MjgtMC4zMTYsMC42MTQtMC41MDMgICBsMy44NzYtMy44NzZjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFM1OC42ODQsNTIuMTQ1LDU4LjI5Myw1Mi41MzV6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMzksNDhjMCwwLjU1MywwLjQ0OCwxLDEsMWgxMi4xNzJsMy4yOTMtMy4yOTNjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQsMEw1MS4zNDQsNDdINDAgICBDMzkuNDQ4LDQ3LDM5LDQ3LjQ0NywzOSw0OHoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Location</strong> <small>South Kansas City</small>
                <br>
                <strong>Avg. Price</strong> <small>$65,000</small> ~ <small> 250,000</small>
              </p>
            </div>

          </div>
          
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-32x32">
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8cGF0aCBkPSJNNTkuOTg5LDIxYy0wLjA5OS0xLjcxMS0yLjEzNC0zLjA0OC02LjIwNC00LjA2OGMwLjEzNy0wLjMsMC4yMTQtMC42MTIsMC4yMTUtMC45MzZWOWgtMC4wMTdDNTMuNjI1LDMuMTcyLDI5Ljc0MywzLDI3LDMgIFMwLjM3NSwzLjE3MiwwLjAxNyw5SDB2MC4xM3YwdjBsMCw2Ljg2OWMwLjAwNSwxLjksMi40NTcsMy4zODcsNi4xMDUsNC40OTRjLTAuMDUsMC4xNjYtMC4wOCwwLjMzNS0wLjA5LDAuNTA3SDZ2MC4xM3YwdjBsMCw2Ljg1NyAgQzIuMDcsMjguOTk5LDAuMTA3LDMwLjMxNywwLjAxLDMySDB2MC4xM3YwdjBsMCw2Ljg2OWMwLjAwMywxLjMyMywxLjE5NiwyLjQ0NSwzLjE0OCwzLjM4Yy0wLjA3NCwwLjIwMy0wLjEyLDAuNDEtMC4xMzMsMC42MjJIMyAgdjAuMTN2MHYwbDAsNi44NjljMC4wMDgsMy4zMjYsNy40OTcsNS4zOTEsMTUuODE4LDYuMzU1YzAuMDYxLDAuMDEyLDAuMTE3LDAuMDM3LDAuMTgyLDAuMDM3YzAuMDE5LDAsMC4wMzUtMC4wMSwwLjA1NC0wLjAxMSAgYzEuNjA0LDAuMTgxLDMuMjM0LDAuMzIyLDQuODQ3LDAuNDIzYzAuMDM0LDAuMDA0LDAuMDY0LDAuMDIsMC4wOTksMC4wMmMwLjAxOSwwLDAuMDM0LTAuMDEsMC4wNTItMC4wMTEgIEMyNi4xLDU2LjkzNywyOC4xMTUsNTcsMzAsNTdjMS44ODUsMCwzLjktMC4wNjMsNS45NDgtMC4xODhjMC4wMTgsMC4wMDEsMC4wMzQsMC4wMTEsMC4wNTIsMC4wMTFjMC4wMzUsMCwwLjA2NS0wLjAxNywwLjA5OS0wLjAyICBjMS42MTMtMC4xMDEsMy4yNDMtMC4yNDEsNC44NDctMC40MjNDNDAuOTY1LDU2LjM4LDQwLjk4MSw1Ni4zOSw0MSw1Ni4zOWMwLjA2NSwwLDAuMTIxLTAuMDI1LDAuMTgyLTAuMDM3ICBjOC4zMjEtMC45NjQsMTUuODA5LTMuMDMsMTUuODE4LTYuMzU3VjQzaC0wLjAxNmMtMC4wNy0xLjIyNi0xLjExNS0yLjI0OS0zLjE3OS0zLjEwNGMwLjEyNi0wLjI4OSwwLjE5NS0wLjU4OSwwLjE5NS0wLjlWMzIuNDYgIGMzLjU5LTEuMTA0LDUuOTk1LTIuNTgxLDYtNC40NjRWMjFINTkuOTg5eiBNNTEuODkyLDM5LjMyMWwtMC4zNDEsMC4yOTlDNTEuMDI2LDQwLjA4Myw1MC4xNTEsNDAuNTUsNDksNDF2LTQuNzY4ICBjMS4xODktMC40MTQsMi4yMDEtMC44NzMsMy0xLjM3NnY0LjEzOEM1MiwzOS4wOTcsNTEuOTYyLDM5LjIwNyw1MS44OTIsMzkuMzIxeiBNMjkuNTI2LDQzLjk2OCAgYy0wLjE0NiwwLjAwNC0wLjI5MywwLjAwNi0wLjQ0LDAuMDA5Yy0wLjM1NywwLjAwNy0wLjcyMywwLjAwOS0xLjA4NSwwLjAxMnYtNC45OTVjMC4yNzUtMC4wMDMsMC41NS0wLjAwNywwLjgyNS0wLjAxMiAgYzAuMDUzLTAuMDAxLDAuMTA2LTAuMDAyLDAuMTU5LTAuMDAzYzEuMDA3LTAuMDE5LDIuMDE0LTAuMDUsMy4wMTYtMC4wOTZ2NC45OTNjLTAuMjE0LDAuMDExLTAuNDI5LDAuMDIxLTAuNjQ2LDAuMDMgIEMzMC43NTMsNDMuOTMzLDMwLjE0NSw0My45NTMsMjkuNTI2LDQzLjk2OHogTTI1LjE1OSw0My45ODJjLTAuNDU4LTAuMDA4LTAuOTE0LTAuMDE5LTEuMzY3LTAuMDMzICBjLTAuMDU2LTAuMDAyLTAuMTEyLTAuMDA0LTAuMTY4LTAuMDA2Yy0wLjU0NS0wLjAxOC0xLjA4Ni0wLjA0MS0xLjYyMy0wLjA2N3YtNC45OTJjMS4wMDIsMC4wNDcsMi4wMDksMC4wNzgsMy4wMTYsMC4wOTYgIGMwLjA1MywwLjAwMSwwLjEwNiwwLjAwMiwwLjE1OCwwLjAwM2MwLjI3NSwwLjAwNSwwLjU1LDAuMDA5LDAuODI1LDAuMDEydjQuOTk4Yy0wLjE5NC0wLjAwMi0wLjM4OC0wLjAwMi0wLjU4MS0wLjAwNSAgQzI1LjMzMSw0My45ODYsMjUuMjQ2LDQzLjk4MywyNS4xNTksNDMuOTgyeiBNNy4wOTcsNDEuNzAyQzcuMDY0LDQxLjY5Miw3LjAzMyw0MS42ODMsNyw0MS42NzR2LTQuODMxICBjMC45MzQsMC4yNTIsMS45MzgsMC40ODIsMywwLjY5MXY0Ljg4MWMtMC45MTgtMC4xOTUtMS43NjUtMC40LTIuNTM2LTAuNjFDNy4zNDIsNDEuNzcsNy4yMTYsNDEuNzM3LDcuMDk3LDQxLjcwMnogTTI4LjE3NSw0OS45ODMgIGMwLjI3NSwwLjAwNSwwLjU1LDAuMDA5LDAuODI1LDAuMDEydjQuOTk5Yy0xLjM4Mi0wLjAxMy0yLjcxNi0wLjA1My00LTAuMTE2di00Ljk5M2MxLjAwMiwwLjA0NywyLjAwOSwwLjA3OCwzLjAxNiwwLjA5NiAgQzI4LjA2OSw0OS45ODEsMjguMTIyLDQ5Ljk4MiwyOC4xNzUsNDkuOTgzeiBNMzEuOTg0LDQ5Ljk4YzEuMDA3LTAuMDE5LDIuMDE0LTAuMDUsMy4wMTYtMC4wOTZ2NC45OTMgIGMtMS4yODQsMC4wNjMtMi42MTgsMC4xMDMtNCwwLjExNnYtNC45OTljMC4yNzUtMC4wMDMsMC41NS0wLjAwNywwLjgyNS0wLjAxMkMzMS44NzgsNDkuOTgyLDMxLjkzMSw0OS45ODEsMzEuOTg0LDQ5Ljk4eiAgIE00MCw0OS41Mjh2NC45NjZjLTAuOTYxLDAuMTAxLTEuOTYxLDAuMTktMywwLjI2M3YtNC45ODdDMzguMDE0LDQ5LjcwNCwzOS4wMTYsNDkuNjIzLDQwLDQ5LjUyOHogTTQyLDQ5LjMxMiAgYzEuMDMxLTAuMTI0LDIuMDMyLTAuMjY1LDMtMC40MjJ2NC45MWMtMC45NDIsMC4xNjYtMS45NDMsMC4zMTktMywwLjQ1OFY0OS4zMTJ6IE00Nyw0OC41MzNjMS4wNjItMC4yMDksMi4wNjYtMC40MzksMy0wLjY5MXY0LjgzMSAgYy0wLjg5MSwwLjI1Ny0xLjg5NCwwLjUwNi0zLDAuNzQxVjQ4LjUzM3ogTTEzLDQ4LjUzM3Y0Ljg4MWMtMS4xMDYtMC4yMzUtMi4xMDktMC40ODQtMy0wLjc0MXYtNC44MzEgIEMxMC45MzQsNDguMDk0LDExLjkzOCw0OC4zMjUsMTMsNDguNTMzeiBNMTUsNDguODkxYzAuOTY4LDAuMTU3LDEuOTY5LDAuMjk4LDMsMC40MjJ2NC45NDZjLTEuMDU3LTAuMTM5LTIuMDU4LTAuMjkyLTMtMC40NTggIFY0OC44OTF6IE0yMCw0OS41MjhjMC45ODQsMC4wOTUsMS45ODYsMC4xNzYsMywwLjI0M3Y0Ljk4N2MtMS4wMzktMC4wNzMtMi4wMzktMC4xNjItMy0wLjI2M1Y0OS41Mjh6IE0xNy41MTksNDMuNTQ4ICBjLTAuMTAyLTAuMDEtMC4yMDMtMC4wMjEtMC4zMDQtMC4wMzFjLTAuMDcyLTAuMDA3LTAuMTQzLTAuMDE2LTAuMjE1LTAuMDIzdi00Ljk2NWMwLjk4NCwwLjA5NSwxLjk4NiwwLjE3NiwzLDAuMjQzdjQuOTgzICBDMTkuMTYsNDMuNjk1LDE4LjMzLDQzLjYyNywxNy41MTksNDMuNTQ4eiBNMTUsMzguMzEydjQuOTQ2Yy0xLjA1Ny0wLjEzOS0yLjA1OC0wLjI5Mi0zLTAuNDU4di00LjkxICBDMTIuOTY4LDM4LjA0NywxMy45NjksMzguMTg5LDE1LDM4LjMxMnogTTM0LjY2Niw0My43MDhjLTAuMjIsMC4wMTctMC40NDIsMC4wMzQtMC42NjYsMC4wNXYtNC45ODcgIGMxLjAxNC0wLjA2NywyLjAxNi0wLjE0NywzLTAuMjQzdjQuOTY2Yy0wLjYxOCwwLjA2NS0xLjI1LDAuMTI2LTEuODk5LDAuMTc5QzM0Ljk1Niw0My42ODYsMzQuODExLDQzLjY5NywzNC42NjYsNDMuNzA4eiAgIE0zOSw0My4yNTh2LTQuOTQ2YzEuMDMxLTAuMTI0LDIuMDMyLTAuMjY1LDMtMC40MjJ2NC45MUM0MS4wNTgsNDIuOTY2LDQwLjA1Nyw0My4xMiwzOSw0My4yNTh6IE00NCwzNy41MzMgIGMxLjA2Mi0wLjIwOSwyLjA2Ni0wLjQzOSwzLTAuNjkxdjQuODMxYy0wLjg5MSwwLjI1Ny0xLjg5NCwwLjUwNi0zLDAuNzQxVjM3LjUzM3ogTTMwLjMyNSwzMi45NjUgIGMtMC43NTItMC4wMTktMS40ODctMC4wNDgtMi4yMDktMC4wODNjLTAuMDM5LTAuMDAyLTAuMDc4LTAuMDA0LTAuMTE2LTAuMDA1di00Ljk5M2MxLjAwMiwwLjA0NywyLjAwOSwwLjA3OCwzLjAxNiwwLjA5NiAgYzAuMDUzLDAuMDAxLDAuMTA2LDAuMDAyLDAuMTU4LDAuMDAzYzAuMjc1LDAuMDA1LDAuNTUsMC4wMDksMC44MjUsMC4wMTJ2NC45OTNjLTAuNDg3LTAuMDA1LTAuOTc4LTAuMDA3LTEuNDUzLTAuMDE4ICBDMzAuNDczLDMyLjk2OCwzMC4zOTgsMzIuOTY3LDMwLjMyNSwzMi45NjV6IE03LDE4LjY3NHYtNC44MzFjMC45MzQsMC4yNTIsMS45MzgsMC40ODIsMywwLjY5MXY0Ljg4MSAgYy0wLjEyMy0wLjAyNi0wLjI1LTAuMDUyLTAuMzctMC4wNzhjLTAuNTMyLTAuMTE3LTEuMDUxLTAuMjM5LTEuNTQ3LTAuMzY4QzcuNzA1LDE4Ljg3Miw3LjM0NiwxOC43NzMsNywxOC42NzR6IE0yNS4xNzUsMTUuOTgzICBjMC4yNzUsMC4wMDUsMC41NSwwLjAwOSwwLjgyNSwwLjAxMnY0Ljk5M2MtMS4zNDYtMC4wMTMtMi42ODQtMC4wNDgtNC0wLjExNHYtNC45ODljMS4wMDIsMC4wNDcsMi4wMDksMC4wNzgsMy4wMTYsMC4wOTYgIEMyNS4wNjksMTUuOTgxLDI1LjEyMiwxNS45ODIsMjUuMTc1LDE1Ljk4M3ogTTI4Ljk4NCwxNS45OGMxLjAwNy0wLjAxOSwyLjAxNC0wLjA1LDMuMDE2LTAuMDk2djQuOTg5ICBjLTAuMTcsMC4wMDgtMC4zMzMsMC4wMi0wLjUwNCwwLjAyOGMtMC4wMTQsMC4wMDEtMC4wMjgsMC4wMDEtMC4wNDMsMC4wMDJjLTAuNjcxLDAuMDMtMS4zNTUsMC4wNTItMi4wNDgsMC4wNjggIGMtMC4xMDgsMC4wMDMtMC4yMTYsMC4wMDQtMC4zMjQsMC4wMDdjLTAuMzU2LDAuMDA3LTAuNzIsMC4wMDgtMS4wODEsMC4wMTJ2LTQuOTk1YzAuMjc1LTAuMDAzLDAuNTUtMC4wMDcsMC44MjUtMC4wMTIgIEMyOC44NzgsMTUuOTgyLDI4LjkzMSwxNS45ODEsMjguOTg0LDE1Ljk4eiBNNTEuNzcxLDE2LjQ4MmwtMC4wMjgtMC4wMDZsLTAuMzY0LDAuMjgzQzUwLjg1MSwxNy4xNyw1MC4wNCwxNy41ODYsNDksMTcuOTg4di00Ljc1NyAgYzEuMTg5LTAuNDE0LDIuMjAxLTAuODczLDMtMS4zNzZ2NC4xMzhDNTIsMTYuMTQ1LDUxLjkyLDE2LjMwOSw1MS43NzEsMTYuNDgyeiBNMzksMjAuMjUydi00Ljk0YzEuMDMxLTAuMTI0LDIuMDMyLTAuMjY1LDMtMC40MjIgIHY0LjkwMkM0MS4wNTIsMTkuOTYsNDAuMDU0LDIwLjExNCwzOSwyMC4yNTJ6IE00NCwxOS40MDd2LTQuODczYzEuMDYyLTAuMjA5LDIuMDY2LTAuNDM5LDMtMC42OTF2NC44MiAgQzQ2LjEwNCwxOC45MjQsNDUuMDk1LDE5LjE3Myw0NCwxOS40MDd6IE0zNywxNS41Mjh2NC45NmMtMC45NjYsMC4xMDItMS45NjYsMC4xOTEtMywwLjI2NXYtNC45ODIgIEMzNS4wMTQsMTUuNzA0LDM2LjAxNiwxNS42MjMsMzcsMTUuNTI4eiBNMTcsMjAuNDl2LTQuOTYyYzAuOTg0LDAuMDk1LDEuOTg2LDAuMTc2LDMsMC4yNDN2NC45NzggIEMxOC45ODIsMjAuNjc2LDE3Ljk3OCwyMC41OTMsMTcsMjAuNDl6IE0xNSwxNS4zMTJ2NC45NDFjLTAuMTk4LTAuMDI2LTAuNDA0LTAuMDQ3LTAuNi0wLjA3NGMtMC4xMjgtMC4wMTgtMC4yNS0wLjAzNy0wLjM3Ni0wLjA1NSAgYy0wLjU3OC0wLjA4My0xLjE0My0wLjE3Mi0xLjY5Ny0wLjI2NUMxMi4yMTYsMTkuODQsMTIuMTA5LDE5LjgyLDEyLDE5LjgwMXYtNC45MUMxMi45NjgsMTUuMDQ3LDEzLjk2OSwxNS4xODksMTUsMTUuMzEyeiAgIE0yNS43NTIsMzIuNzM5Yy0wLjEzNS0wLjAxLTAuMjcxLTAuMDItMC40MDUtMC4wM2MtMC42NC0wLjA1LTEuMjY1LTAuMTA1LTEuODc1LTAuMTY2Yy0wLjEzMS0wLjAxMy0wLjI2Mi0wLjAyNy0wLjM5Mi0wLjA0ICBDMjMuMDUzLDMyLjUsMjMuMDI3LDMyLjQ5NiwyMywzMi40OTR2LTQuOTY2YzAuOTg0LDAuMDk1LDEuOTg2LDAuMTc2LDMsMC4yNDN2NC45ODRDMjUuOTE5LDMyLjc0OSwyNS44MzMsMzIuNzQ1LDI1Ljc1MiwzMi43Mzl6ICAgTTE5LjE0NSwzMS45OTJjLTAuMzk2LTAuMDYzLTAuNzY4LTAuMTMxLTEuMTQ1LTAuMTk3di00LjkwNGMwLjk2OCwwLjE1NywxLjk2OSwwLjI5OCwzLDAuNDIydjQuOTQ2ICBjLTAuNjEyLTAuMDgxLTEuMjExLTAuMTY1LTEuNzg2LTAuMjU1QzE5LjE5MSwzMS45OTksMTkuMTY4LDMxLjk5NSwxOS4xNDUsMzEuOTkyeiBNMTYsMjYuNTMzdjQuODczICBjLTEuMTA1LTAuMjM3LTIuMTA3LTAuNDg5LTMtMC43NTF2LTQuODEzQzEzLjkzNCwyNi4wOTQsMTQuOTM4LDI2LjMyNSwxNiwyNi41MzN6IE0xMSwyNS4yMzF2NC43NTEgIGMtMS41NzItMC42MDctMi41ODYtMS4yMjctMi45MTYtMS43NzlsLTAuMDY3LTAuMTEyQzguMDExLDI4LjA2LDguMDAxLDI4LjAyNyw4LDI3Ljk5NmwwLTQuMTQxICBDOC43OTksMjQuMzU4LDkuODExLDI0LjgxNywxMSwyNS4yMzF6IE0zNC45ODQsMjcuOThjMS4wMDctMC4wMTksMi4wMTQtMC4wNSwzLjAxNi0wLjA5NnY0Ljk4OGMtMS4zMTQsMC4wNjUtMi42NSwwLjEwMS00LDAuMTE1ICB2LTQuOTkyYzAuMjc1LTAuMDAzLDAuNTUtMC4wMDcsMC44MjUtMC4wMTJDMzQuODc4LDI3Ljk4MiwzNC45MzEsMjcuOTgxLDM0Ljk4NCwyNy45OHogTTQ3LjkwNywzMS44MTcgIGMtMC40MzksMC4wNzYtMC44ODIsMC4xNTEtMS4zMzcsMC4yMmMtMC4yNjEsMC4wNC0wLjUyOCwwLjA3OC0wLjc5NiwwLjExNmMtMC4yNTMsMC4wMzYtMC41MTYsMC4wNjctMC43NzMsMC4xdi00Ljk0MSAgYzEuMDMxLTAuMTI0LDIuMDMyLTAuMjY1LDMtMC40MjJ2NC45MUM0Ny45NjksMzEuODA2LDQ3LjkzOCwzMS44MTIsNDcuOTA3LDMxLjgxN3ogTTQxLjEzNiwzMi42NzEgIGMtMC4zNzMsMC4wMzEtMC43NTgsMC4wNTEtMS4xMzYsMC4wNzh2LTQuOTc4YzEuMDE0LTAuMDY3LDIuMDE2LTAuMTQ3LDMtMC4yNDN2NC45NjFjLTAuNTgxLDAuMDYxLTEuMTYxLDAuMTIyLTEuNzU4LDAuMTcyICBDNDEuMjA2LDMyLjY2NCw0MS4xNzIsMzIuNjY4LDQxLjEzNiwzMi42NzF6IE01Mi41NjQsMzAuNzk2Yy0wLjQ5OCwwLjEzOS0xLjAyNSwwLjI2OS0xLjU2MywwLjM5NiAgYy0wLjI0OSwwLjA1OC0wLjUwMywwLjExNi0wLjc2MywwLjE3MmMtMC4wNzcsMC4wMTctMC4xNTksMC4wMzItMC4yMzcsMC4wNDl2LTQuODc5YzEuMDYyLTAuMjA5LDIuMDY2LTAuNDM5LDMtMC42OTF2NC44MzEgIEM1Mi44NTcsMzAuNzE0LDUyLjcxMiwzMC43NTUsNTIuNTY0LDMwLjc5NnogTTU3Ljk4OSwyMS4wNjVjLTAuMDkyLDAuNjc5LTEuNjMxLDEuNTgyLTQuMzc4LDIuNDMxbDAsMCAgYy0zLjUzOCwxLjA5My05LjA3NCwyLjA5NC0xNi4wOSwyLjQwNGMtMC4zNTksMC4wMTUtMC43MTcsMC4wMy0xLjA4MywwLjA0MmMtMC4yOTksMC4wMS0wLjU5OSwwLjAxOS0wLjkwNCwwLjAyNyAgQzM0LjcwNiwyNS45ODcsMzMuODY2LDI2LDMzLDI2cy0xLjcwNi0wLjAxMy0yLjUzNC0wLjAzMmMtMC4zMDQtMC4wMDctMC42MDQtMC4wMTctMC45MDQtMC4wMjcgIGMtMC4zNjctMC4wMTEtMC43MjUtMC4wMjctMS4wODMtMC4wNDJjLTcuMDE2LTAuMzEtMTIuNTUzLTEuMzExLTE2LjA5LTIuNDA0bDAsMGMtMi43MjUtMC44NDItNC4yNjEtMS43MzgtNC4zNzUtMi40MTQgIGMwLjAwNS0wLjAxOSwwLjAwNS0wLjAzNSwwLjAxNy0wLjA1OWMwLjA2OCwwLjAxNywwLjE0NCwwLjAzMSwwLjIxMywwLjA0OGMwLjM5MSwwLjA5MywwLjc5MiwwLjE4MywxLjIsMC4yNjkgIGMxLjk4NywwLjQyOCw0LjE4OSwwLjc3OSw2LjUzNSwxLjA0N2MwLjAwOCwwLDAuMDE0LDAuMDA0LDAuMDIxLDAuMDA0YzAuMDAyLDAsMC4wMDQtMC4wMDEsMC4wMDUtMC4wMDEgIGMxLjU5OCwwLjE4MiwzLjI1NiwwLjMyNSw0Ljk1OCwwLjQyNmMwLjAxMywwLDAuMDI0LDAuMDA3LDAuMDM3LDAuMDA3YzAuMDA3LDAsMC4wMTItMC4wMDQsMC4wMTktMC4wMDQgIGMxLjIyNSwwLjA3MiwyLjQ2NiwwLjEyNSwzLjcyMiwwLjE1M0MyNS41MSwyMi45OSwyNi4yNjUsMjMsMjcsMjNjMC41MjUsMCwxLjA2My0wLjAwNiwxLjYwNi0wLjAxNiAgYzcuMjY2LTAuMTEyLDE0LTAuOTc2LDE4LjY4Ni0yLjMxNWMwLjIxNi0wLjA2MSwwLjQyNy0wLjEyNCwwLjYzNS0wLjE4N2MwLjEyNy0wLjAzOSwwLjI1Ny0wLjA3NywwLjM4LTAuMTE2ICBjMC4zNjItMC4xMTYsMC43MDktMC4yMzUsMS4wNDQtMC4zNTljMC4wNTgtMC4wMjIsMC4xMTMtMC4wNDQsMC4xNzEtMC4wNjZjMC4yODMtMC4xMDcsMC41NTUtMC4yMTgsMC44MTUtMC4zMzEgIGMwLjA3NS0wLjAzMywwLjE1Mi0wLjA2NSwwLjIyNS0wLjA5OGMwLjI3Ny0wLjEyNSwwLjU0NS0wLjI1MywwLjc5My0wLjM4NmMwLjExMi0wLjA1OSwwLjIwOS0wLjEyLDAuMzE0LTAuMTggIGMwLjEyLTAuMDY5LDAuMjQtMC4xMzksMC4zNTEtMC4yMWMwLjA2My0wLjA0LDAuMTM4LTAuMDc4LDAuMTk4LTAuMTE4QzU2LjY5NSwxOS41ODksNTcuODc1LDIwLjY1MSw1Ny45ODksMjEuMDY1eiBNMjcsNSAgYzE2LjQ4OSwwLDI0LjgyOSwyLjU5NiwyNC45ODUsNC4wODZjLTAuMTIxLDAuNjc2LTEuNjU2LDEuNTY5LTQuMzc0LDIuNDA5bDAsMGMtMy41MzgsMS4wOTMtOS4wNzQsMi4wOTQtMTYuMDksMi40MDQgIGMtMC4zNTksMC4wMTUtMC43MTcsMC4wMy0xLjA4MywwLjA0MmMtMC4yOTksMC4wMS0wLjU5OSwwLjAxOS0wLjkwNCwwLjAyN0MyOC43MDYsMTMuOTg3LDI3Ljg2NiwxNCwyNywxNHMtMS43MDYtMC4wMTMtMi41MzQtMC4wMzIgIGMtMC4zMDQtMC4wMDctMC42MDQtMC4wMTctMC45MDQtMC4wMjdjLTAuMzY3LTAuMDExLTAuNzI1LTAuMDI3LTEuMDgzLTAuMDQyYy03LjAxNi0wLjMxLTEyLjU1My0xLjMxMS0xNi4wOS0yLjQwNGwwLDAgIGMtMi43MTktMC44NC00LjI1My0xLjczMy00LjM3NC0yLjQwOUMyLjE3MSw3LjU5NiwxMC41MTEsNSwyNyw1eiBNMiwxNS45OTZsMC00LjE0MWMwLjc5OSwwLjUwMywxLjgxMSwwLjk2MiwzLDEuMzc2djQuNzg4ICBDMy4wNTUsMTcuMjksMi4wMDIsMTYuNTU5LDIsMTUuOTk2eiBNNi44NDQsMjkuODM1YzAuMDE1LDAuMDE2LDAuMDM4LDAuMDMsMC4wNTMsMC4wNDZjMS4zNjksMS4zODIsNC4yMDQsMi40NjgsNy43MzMsMy4yNzggIGMwLjA4MSwwLjAxOSwwLjE2NywwLjAzNywwLjI0OSwwLjA1NmMwLjI1OSwwLjA1OCwwLjUyMiwwLjExNSwwLjc4OCwwLjE3YzMuMjQxLDAuNjksNy4xMSwxLjE4OSwxMS4zMjUsMS40MzYgIGMwLjAwMywwLDAuMDA1LDAuMDAxLDAuMDA3LDAuMDAxYzAuMDAyLDAsMC4wMDMtMC4wMDEsMC4wMDQtMC4wMDFjMS4zNTQsMC4wNzksMi43MzksMC4xMzQsNC4xNTMsMC4xNTggIEMzMS43ODIsMzQuOTkyLDMyLjM5OCwzNSwzMywzNWMwLjY5LDAsMS4zOTgtMC4wMDgsMi4xMTgtMC4wMjVjMS4zMDgtMC4wMjcsMi41OTctMC4wODEsMy44NjgtMC4xNTUgIGMwLjAwNSwwLDAuMDA5LDAuMDAzLDAuMDE0LDAuMDAzYzAuMDA5LDAsMC4wMTYtMC4wMDUsMC4wMjUtMC4wMDVjNC4yMjYtMC4yNDksOC4xOTEtMC43NTMsMTEuNTQ0LTEuNDc4ICBjLTAuNzI2LDAuMzgtMS43MiwwLjc3My0yLjk1OCwxLjE1NmwwLDBjLTMuNzM1LDEuMTU0LTkuNywyLjIwNS0xNy4yODEsMi40NDljLTAuMjI1LDAuMDA3LTAuNDQ3LDAuMDE1LTAuNjc1LDAuMDIxICBjLTAuMjQ1LDAuMDA2LTAuNDk0LDAuMDEtMC43NDMsMC4wMTVDMjguMjgzLDM2Ljk5MSwyNy42NSwzNywyNywzN2MtMC44NjYsMC0xLjcwNi0wLjAxMy0yLjUzNC0wLjAzMiAgYy0wLjMwNC0wLjAwNy0wLjYwNC0wLjAxNy0wLjkwNC0wLjAyN2MtMC4zNjctMC4wMTEtMC43MjUtMC4wMjctMS4wODMtMC4wNDJjLTcuMDE2LTAuMzEtMTIuNTUzLTEuMzExLTE2LjA5LTIuNDA0bDAsMCAgYy0yLjc1LTAuODUtNC4yODktMS43NTQtNC4zNzgtMi40MzNDMi4xMjIsMzEuNjg2LDMuMTMzLDMwLjc0NSw2Ljg0NCwyOS44MzV6IE0yLDM4Ljk5NmwwLTQuMTQxYzAuNzk5LDAuNTAzLDEuODExLDAuOTYyLDMsMS4zNzYgIHY0Ljc2OWwtMC41NzEtMC4yMjJMNC40MTcsNDAuNzlDMi44NDcsNDAuMTM5LDIuMDAyLDM5LjUsMiwzOC45OTZ6IE01LDQ5Ljk5NmwwLTQuMTQxYzAuNzk5LDAuNTAzLDEuODExLDAuOTYyLDMsMS4zNzZ2NC43ODggIEM2LjA1NSw1MS4yOSw1LjAwMiw1MC41NTksNSw0OS45OTZ6IE01Miw1Mi4wMTl2LTQuNzg3YzEuMTg5LTAuNDE0LDIuMjAxLTAuODczLDMtMS4zNzZ2NC4xMzggIEM1NC45OTksNTAuNTU3LDUzLjk0NSw1MS4yODksNTIsNTIuMDE5eiBNNTQuOTg3LDQzLjA3N2MtMC4xMDksMC42NzctMS42NDUsMS41NzUtNC4zNzYsMi40MTlsMCwwICBjLTMuNTM4LDEuMDkzLTkuMDc0LDIuMDk0LTE2LjA5LDIuNDA0Yy0wLjM1OSwwLjAxNS0wLjcxNywwLjAzLTEuMDgzLDAuMDQyYy0wLjI5OSwwLjAxLTAuNTk5LDAuMDE5LTAuOTA0LDAuMDI3ICBDMzEuNzA2LDQ3Ljk4NywzMC44NjYsNDgsMzAsNDhjLTAuODY2LDAtMS43MDctMC4wMTMtMi41MzYtMC4wMzJjLTAuMzAxLTAuMDA3LTAuNTk4LTAuMDE3LTAuODk1LTAuMDI3ICBjLTAuMzY5LTAuMDEyLTAuNzI5LTAuMDI3LTEuMDktMC4wNDJjLTcuMDE2LTAuMzEtMTIuNTUyLTEuMzExLTE2LjA5LTIuNDA0bDAsMGMtMi42NDUtMC44MTctNC4xNzMtMS42ODUtNC4zNjUtMi4zNTUgIGMwLjI5OCwwLjEwNCwwLjYwNywwLjIwNSwwLjkyNCwwLjMwNGMwLjAzMiwwLjAxLDAuMDY0LDAuMDIsMC4wOTYsMC4wMjljMC4yNywwLjA4MywwLjU0NiwwLjE2MywwLjgyOSwwLjI0MSAgYzAuMTA3LDAuMDMsMC4yMTUsMC4wNiwwLjMyNCwwLjA4OWMwLjE2LDAuMDQzLDAuMzI0LDAuMDg0LDAuNDg4LDAuMTI2YzMuNjQyLDAuOTMzLDguMjkxLDEuNTk0LDEzLjMxLDEuODkxICBjMC4wMDIsMCwwLjAwMywwLjAwMSwwLjAwNSwwLjAwMWMwLjAwMSwwLDAuMDAyLTAuMDAxLDAuMDAzLTAuMDAxYzEuNTUsMC4wOTIsMy4xMzMsMC4xNDksNC43MzMsMC4xNjggIEMyNi4xNjIsNDUuOTk2LDI2LjU4NSw0NiwyNyw0NmMwLjU1MSwwLDEuMTE1LTAuMDA3LDEuNjg2LTAuMDE3YzEuNDU5LTAuMDI0LDIuODk5LTAuMDc4LDQuMzA3LTAuMTYyICBjMC4wMDMsMCwwLjAwNSwwLjAwMiwwLjAwOCwwLjAwMmMwLjAwNSwwLDAuMDA4LTAuMDAzLDAuMDEzLTAuMDAzYzEuNzE1LTAuMTAzLDMuMzc1LTAuMjUsNC45Ny0wLjQzMyAgYzAuMDA2LDAsMC4wMTEsMC4wMDMsMC4wMTcsMC4wMDNjMC4wMjIsMCwwLjA0LTAuMDExLDAuMDYyLTAuMDEzYzEuNzc2LTAuMjA1LDMuNDYtMC40NTcsNS4wMjMtMC43NSAgYzAuMzIyLTAuMDU5LDAuNjM5LTAuMTIsMC45NTMtMC4xODNjMC4wNy0wLjAxNCwwLjE0LTAuMDI4LDAuMjEtMC4wNDNjMi45NTMtMC42MDYsNS41MDktMS4zOTEsNy4yNjMtMi4zNjQgIGMwLjA5Ni0wLjA1MiwwLjE4Ni0wLjEwNiwwLjI3Ny0wLjE1OWMwLjExMS0wLjA2NiwwLjIxNy0wLjEzMywwLjMyLTAuMjAxYzAuMDk2LTAuMDYyLDAuMjA3LTAuMTIyLDAuMjk1LTAuMTg1ICBDNTQuMzc4LDQyLjE5Niw1NC45MjIsNDIuODI2LDU0Ljk4Nyw0My4wNzd6IE01NSwzMC4wMTl2LTQuNzg3YzEuMTg5LTAuNDE0LDIuMjAxLTAuODczLDMtMS4zNzZ2NC4xMzggIEM1Ny45OTksMjguNTU3LDU2Ljk0NSwyOS4yODksNTUsMzAuMDE5eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              
               <p><strong>Price</strong> <span class="is-pulled-right">$40,000 ~ 110,000 </span></p>
               <p><strong>Avg. Price</strong> <span class="is-pulled-right">$40,000 ~ 110,000 </span></p>
            </div>

            <!-- <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-reply"></i></span>
                </a>
               
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav> -->
          </div>
          
          <!-- <div class="media-right">
            <button class="delete"></button>
          </div> -->
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-32x32">
              <img src="/static/svg/books.svg"/>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>School Rating</strong> <small>5 </small> <small>Stars</small>
                <br>
                <strong>School District</strong> <small>Kansas City Missouri</small> 
              </p>
            </div>
          </div>
          
          <!-- <div class="media-right">
            <button class="delete"></button>
          </div> -->
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-32x32">
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDg2LjQ1NiwzMTAuNTA5bC0xNDkuMTYzLTEzNS45NmwyNC4wODktMjQuMDg5YzEuNjk3LDEuMTY0LDMuNjY5LDEuNzUzLDUuNjQ2LDEuNzUzYzIuNTYsMCw1LjExOC0wLjk3Nyw3LjA3MS0yLjkyOSAgICBsMjcuMTM0LTI3LjEzNGMzLjkwNS0zLjkwNSwzLjkwNS0xMC4yMzcsMC0xNC4xNDNMMjk2LjE1NCwyLjkyOGMtMy45MDYtMy45MDQtMTAuMjM2LTMuOTA0LTE0LjE0MywwbC0yNy4xMzQsMjcuMTM0ICAgIGMtMy40NiwzLjQ2LTMuODQ4LDguODIzLTEuMTc2LDEyLjcxN0wxNTAuMTQ2LDE0Ni4zMzVjLTMuODk1LTIuNjcxLTkuMjU2LTIuMjg0LTEyLjcxNywxLjE3NmwtMjcuMTM0LDI3LjEzNCAgICBjLTMuOTA1LDMuOTA1LTMuOTA1LDEwLjIzNywwLDE0LjE0M2wxMDUuMDc5LDEwNS4wOGMxLjg3NiwxLjg3NSw0LjQxOSwyLjkyOSw3LjA3MSwyLjkyOXM1LjE5Ni0xLjA1NCw3LjA3MS0yLjkyOWwyNy4xMzQtMjcuMTM1ICAgIGMzLjQ2LTMuNDYsMy44NDgtOC44MjMsMS4xNzYtMTIuNzE3bDI0LjA4OS0yNC4wODhMNDE3Ljg3NywzNzkuMDljMS44NDEsMi4wMTksNC40MjgsMy4xOTgsNy4xNTksMy4yNjEgICAgYzAuMDc3LDAuMDAyLDAuMTU0LDAuMDAzLDAuMjMxLDAuMDAzYzIuNjQ5LDAsNS4xOTMtMS4wNTIsNy4wNzEtMi45MjlsNTQuNDUyLTU0LjQ1MmMxLjkzMi0xLjkzMywyLjk4OS00LjU3MSwyLjkyNi03LjMwMyAgICBDNDg5LjY1NCwzMTQuOTM3LDQ4OC40NzUsMzEyLjM1LDQ4Ni40NTYsMzEwLjUwOXogTTI4OS4wODMsMjQuMTQybDkwLjkzNyw5MC45MzdsLTEyLjk5MSwxMi45OTFsLTkwLjkzNi05MC45MzdMMjg5LjA4MywyNC4xNDJ6ICAgICBNMjIyLjQ0NSwyNzIuNjUzbC05MC45MzctOTAuOTM4bDEyLjk5MS0xMi45OTFsOTAuOTM3LDkwLjkzN0wyMjIuNDQ1LDI3Mi42NTN6IE0yNDMuODA4LDIzOS43NDhsLTc5LjM5Ni03OS4zOTZMMjY3LjcyLDU3LjA0NiAgICBsNzkuMzk2LDc5LjM5NkwyNDMuODA4LDIzOS43NDh6IE00MjUuNjAyLDM1Ny44NzVMMjk2LjA3MiwyMTUuNzdsMjcuMDY0LTI3LjA2M2wxNDIuMTA2LDEyOS41MjlMNDI1LjYwMiwzNTcuODc1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4NS44NDcsNDMyLjc2OXYtMTMuMTI0YzAtMjEuODU2LTE3Ljc4MS0zOS42MzgtMzkuNjM4LTM5LjYzOEg5OS42MzhDNzcuNzgyLDM4MC4wMDcsNjAsMzk3Ljc4OCw2MCw0MTkuNjQ1djEzLjEyNCAgICBjLTIwLjk2OCwxLjAwNi0zNy43MTgsMTguMzgtMzcuNzE4LDM5LjU5MmMwLDIxLjg1NiwxNy43ODIsMzkuNjM5LDM5LjYzOSwzOS42MzloMzIyLjAwNWMyMS44NTcsMCwzOS42MzktMTcuNzgyLDM5LjYzOS0zOS42MzkgICAgQzQyMy41NjQsNDUxLjE0OSw0MDYuODE0LDQzMy43NzUsMzg1Ljg0Nyw0MzIuNzY5eiBNMzgzLjkyNiw0OTJINjEuOTIxYy0xMC44MjksMC0xOS42MzktOC44MS0xOS42MzktMTkuNjM5ICAgIGMwLTEwLjgyOCw4LjgwOS0xOS42MzgsMTkuNjM5LTE5LjYzOEg3MGMwLjAzMywwLDAuMDY1LTAuMDA1LDAuMDk4LTAuMDA1YzAuMDEzLDAsMC4wMjYsMC4wMDIsMC4wNCwwLjAwMmgyMTUuNDMgICAgYzUuNTIzLDAsMTAtNC40NzcsMTAtMTBjMC01LjUyMi00LjQ3Ny0xMC0xMC0xMEg4MHYtMTMuMDc1YzAtMTAuODI4LDguODEtMTkuNjM4LDE5LjYzOC0xOS42MzhoMjQ2LjU3MSAgICBjMTAuODI4LDAsMTkuNjM4LDguODEsMTkuNjM4LDE5LjYzOHYyMy4wNzhjMCw1LjUyMyw0LjQ3OCwxMCwxMCwxMGg4LjA3OWMxMC44MjksMCwxOS42MzksOC44MSwxOS42MzksMTkuNjM4ICAgIEM0MDMuNTY0LDQ4My4xOSwzOTQuNzU1LDQ5MiwzODMuOTI2LDQ5MnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMzQuNDY5LDQ0NS45OTljLTAuMTI4LTAuNjQtMC4zMTktMS4yNy0wLjU2OS0xLjg3Yy0wLjI1LTAuNjEtMC41Ni0xLjE5LTAuOTItMS43M2MtMC4zNTktMC41NS0wLjc3OS0xLjA2LTEuMjM5LTEuNTIgICAgYy0wLjQ2LTAuNDYtMC45NzEtMC44OC0xLjUyLTEuMjRjLTAuNTQtMC4zNi0xLjEyLTAuNjctMS43My0wLjkyYy0wLjYwMS0wLjI1LTEuMjMtMC40NC0xLjg3LTAuNTdjLTEuMjktMC4yNi0yLjYyLTAuMjYtMy45MSwwICAgIGMtMC42MywwLjEzLTEuMjYsMC4zMi0xLjg3LDAuNTdjLTAuNiwwLjI1LTEuMTgsMC41Ni0xLjcyLDAuOTJjLTAuNTUxLDAuMzYtMS4wNjEsMC43OC0xLjUyMSwxLjI0ICAgIGMtMS44NywxLjg2LTIuOTMsNC40MzktMi45Myw3LjA3YzAsMC42NTksMC4wNiwxLjMxLDAuMTg5LDEuOTZjMC4xMzEsMC42MywwLjMyLDEuMjYsMC41NywxLjg2OSAgICBjMC4yNSwwLjYwMSwwLjU2LDEuMTgxLDAuOTIsMS43MjFjMC4zNywwLjU1LDAuNzksMS4wNiwxLjI1LDEuNTJjMC40NiwwLjQ2LDAuOTcsMC44OCwxLjUyMSwxLjI1YzAuNTQsMC4zNiwxLjEyLDAuNjcsMS43MiwwLjkyICAgIGMwLjYxLDAuMjUsMS4yNCwwLjQ0LDEuODcsMC41N2MwLjY0OSwwLjEzLDEuMzA5LDAuMTksMS45NiwwLjE5YzAuNjQ5LDAsMS4zMS0wLjA2MSwxLjk1LTAuMTljMC42NC0wLjEzLDEuMjctMC4zMiwxLjg3LTAuNTcgICAgYzAuNjA5LTAuMjUsMS4xOS0wLjU2LDEuNzMtMC45MmMwLjU1LTAuMzcsMS4wNjEtMC43OSwxLjUyLTEuMjVjMC40Ni0wLjQ2LDAuODgtMC45NywxLjIzOS0xLjUyYzAuMzYtMC41NCwwLjY3LTEuMTIsMC45Mi0xLjcyMSAgICBjMC4yNS0wLjYwOSwwLjQ0LTEuMjM5LDAuNTctMS44NjljMC4xMy0wLjY1LDAuMi0xLjMwMSwwLjItMS45NkMzMzQuNjY5LDQ0Ny4yOTksMzM0LjU5OSw0NDYuNjQ4LDMzNC40NjksNDQ1Ljk5OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMjIuOTIzLDMwNy43NzJjLTUuNTIzLDAtMTAsNC40NzctMTAsMTB2MTkuNDE2YzAsNS41MjIsNC40NzcsMTAsMTAsMTBjNS41MjIsMCwxMC00LjQ3OCwxMC0xMHYtMTkuNDE2ICAgIEMyMzIuOTIzLDMxMi4yNDksMjI4LjQ0NSwzMDcuNzcyLDIyMi45MjMsMzA3Ljc3MnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNjYuNDA1LDM0NC4zNDRsLTE3Ljg3Mi0xNy44NzFjLTMuOTA2LTMuOTA0LTEwLjIzOC0zLjkwNC0xNC4xNDMsMGMtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzbDE3Ljg3MiwxNy44NzEgICAgYzEuOTU0LDEuOTUyLDQuNTEyLDIuOTI5LDcuMDcyLDIuOTI5czUuMTE5LTAuOTc3LDcuMDcxLTIuOTI5QzE3MC4zMSwzNTQuNTgyLDE3MC4zMSwzNDguMjUsMTY2LjQwNSwzNDQuMzQ0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMS40NTUsMzI2LjQ3M2MtMy45MDYtMy45MDQtMTAuMjM2LTMuOTA0LTE0LjE0MywwbC0xNy44NzEsMTcuODcxYy0zLjkwNSwzLjkwNS0zLjkwNSwxMC4yMzcsMCwxNC4xNDMgICAgYzEuOTUzLDEuOTUyLDQuNTEyLDIuOTI5LDcuMDcxLDIuOTI5czUuMTE5LTAuOTc3LDcuMDcyLTIuOTI5bDE3Ljg3MS0xNy44NzFDMzE1LjM2LDMzNi43MTEsMzE1LjM2LDMzMC4zNzksMzExLjQ1NSwzMjYuNDczeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />            
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <small>Auction House </small>
                <br>
                <strong>Xyz Law Firm</strong> 
                <br>
                <small>Where:</small> 
                <br>
                <strong>Jackson County Court House </strong> 
                <br>
                <small>When:</small> 
                <br>
                <strong>Tuesday Jan 16th, 2018</strong> 
              </p>
            </div>

            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <p><span class="icon is-small"><i class="fas fa-calendar"></i></span> Save the Date</p>
                </a>
               
                <!-- <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a> -->
              </div>
            </nav>
          </div>
          
          <!-- <div class="media-right">
            <button class="delete"></button>
          </div> -->
        </article>

      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardInfoTile',
  components: {

  },
    data() {
        return {
            date: new Date()
        }
    },
    computed: {
        
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tile.is-parent {
      padding: 0.4rem;
  }

</style>
