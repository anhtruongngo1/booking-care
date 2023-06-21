<template>
    <div class="bg-[#F0F2F5]">
        <router-view></router-view>
        <div class="wrapperHome">
         <div class="wrapperGrid">
            <div class="gridListItem1">
               <div class="item1 box">
                  <div class="wrapperTitle">
                     <h5 class="title">Weekly Overview</h5>
                     <div class="wrapperIcon">
                        <FontAwesomeIcon
                           icon={faEllipsisVertical}
                           class="iconMenu"
                        />
                     </div>
                  </div>
                  <div class="wrapperGraph">
                     <div>
                        <div class="line">
                           <span>90k</span>
                           <div></div>
                        </div>
                        <div class="line">
                           <span>60k</span>
                           <div></div>
                        </div>
                        <div class="line">
                           <span>30k</span>
                           <div></div>
                        </div>
                        <div class="line">
                           <span>0k</span>
                           <div></div>
                        </div>
                     </div>
                     <div class="wrapperGraphColum">
                        <div class="h-50-custom">
                           <span>Sun / 50k</span>
                        </div>
                        <div class="h-80-custom">
                           <span>Mon / 79k</span>
                        </div>
                        <div class="h-30-custom">
                           <span>Tue / 33k</span>
                        </div>
                        <div class="h-50-custom">
                           <span>Wed / 49k</span>
                        </div>
                        <div class="h-80-custom">
                           <span>Thur / 77k</span>
                        </div>
                        <div class="h-30-custom">
                           <span>Fri / 30k</span>
                        </div>
                     </div>
                  </div>
                  <div class="detail">
                     <span>33%</span>
                     <p>Your sales performance is 33% 😎 better compared to last month</p>
                  </div>
                  <button class="button">Details</button>
               </div>
               <div class="item2 box">
                  <div class="wrapperTitle">
                     <h5 class="title">Total Earning</h5>
                     <div class="wrapperIcon">
                        <FontAwesomeIcon
                           icon={faEllipsisVertical}
                           className={styles.iconMenu}
                        />
                     </div>
                  </div>
                  <div class="totals">
                     <h3>$24,895</h3>
                     <div class="wrapperIcon">
                        <FontAwesomeIcon
                           icon={faCaretDown}
                           class="icon"
                        />
                     </div>

                     <span>10%</span>
                  </div>
                  <p>Compared to $84,325 last year</p>
                  <div>
                     <div class="wrapperOther">
                        <div class="image">
                           <img
                              src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/cards/logo-zipcar.png"
                              alt='img'
                           />
                        </div>
                        <div class="info">
                           <h5>Zipcar</h5>
                           <span>Vuejs, React & HTML</span>
                        </div>
                        <div>
                           <span>$24,895.65</span>
                        </div>
                     </div>
                     <div class="wrapperOther">
                        <div class="image">
                           <img
                              src='https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/cards/logo-aviato.png'
                              alt='img'
                           />
                        </div>
                        <div class="info">
                           <h5>Bitbank</h5>
                           <span>Sketch, Figma & XD</span>
                        </div>
                        <div>
                           <span>$4,895.65</span>
                        </div>
                     </div>
                     <div class="wrapperOther">
                        <div class="image">
                           <img
                              src='https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/cards/logo-bitbank.png'
                              alt='img'
                           />
                        </div>
                        <div class="info">
                           <h5>Aviato</h5>
                           <span> HTML & Angular</span>
                        </div>
                        <div>
                           <span>$24,895.65</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="item3">
                  <div class="box">
                     <div class="wrapperIcon">
                        <FontAwesomeIcon
                           icon={faChartSimple}
                           class="icon"
                        />
                     </div>
                     <h5>Total Profit</h5>
                     <div class="price">
                        $25.6k
                        <span>+42%</span>
                     </div>
                     <span>Weekly Profit</span>
                  </div>
                  <div class="box">
                     <div class="wrapperIcon">
                        <FontAwesomeIcon
                           icon={faDollarSign}
                           class="icon"
                        />
                     </div>
                     <h5>Refunds</h5>
                     <div class="price">
                        $78
                        <span>-15%</span>
                     </div>
                     <span>Past Month</span>
                  </div>
                  <div class="box">
                     <div class="wrapperIcon">
                        <FontAwesomeIcon
                           icon={faShoppingBag}
                           class="icon"
                        />
                     </div>
                     <h5>New Project</h5>
                     <div class="price" >
                        $25.6k
                        <span>+42%</span>
                     </div>
                     <span>Yearly Project</span>
                  </div>
                  <div class="box">
                     <div class="wrapperIcon">
                        <FontAwesomeIcon
                           icon={faUser}
                           class="icon"
                        />
                     </div>
                     <h5>Total Profit</h5>
                     <div class="price">
                        $25.6k
                        <span>+42%</span>
                     </div>
                     <span>Last Week</span>
                  </div>
               </div>
            </div>
            <div class="box gridListItem2">
               <table>
                  <thead>
                     <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ADDRESS</th>
                        <th>STATUS</th>
                     </tr>
                  </thead>
                  <tbody>          
                        <tr v-for="item in listData"  :key="item.id">
                           <td>
                              <div class="name">{{ item.lastName }} {{ item.firstName }}</div>
                              <span>{{ item.email }}</span>
                           </td>
                           <td>{{ item.email }}</td>
                           <td>{{ item.phoneNumber }}</td>
                           <td>{{ item.address }}</td>
                           <td class="status">
                              <span
                             
                              >
                                 Chi tiết
                              </span>
                           </td>
                        </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import useDoctor from "@/services/apiListDoctor"

export default {
    setup() {
      const { listData, fetchListDoctor, errorData } = useDoctor()
      fetchListDoctor()

        const doctors = [
      {
         name: "Sally Quinn",
         detail: "Human Resources Assistant",
         email: "eebsworth2m@sbwire.com",
         date: "09/27/2018",
         age: "27",
         status: "Professional",
         wage: "$1720",
      },
      {
         name: "Margaret Bowers",
         detail: "Nuclear Power Engineer",
         email: "kocrevy0@thetimes.co.uk",
         age: "61",
         date: "09/23/2016",
         status: "Current",
         wage: "$1220",
      },
      {
         name: "Minnie Roy",
         detail: "Environmental Specialist",
         email: "ediehn6@163.com",
         age: "41",
         date: "10/15/2017",
         status: "Professional",
         wage: "$2720",
      },
      {
         name: "Ralph Leonard",
         detail: "Sales Representative",
         email: "dfalloona@ifeng.com",
         age: "41",
         date: "1/15/2018",
         status: "Current",
         wage: "$3720",
      },
   ]
      return {
         listData
      }
    },
    components: {
        

    },
};
</script>

<style>
.wrapperHome {
  width: 100%;
  padding: 1rem;
}
.wrapperGrid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;
}
.wrapperGrid .gridListItem1, .wrapperGrid .gridListItem2 {
  height: 40rem;
}
.wrapperGrid .gridListItem3 {
  height: 2rem;
}
.wrapperGrid .gridListItem1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.wrapperGrid .gridListItem1 .item1 {
  text-align: center;
}
.wrapperGrid .gridListItem1 .item1:nth-child(3) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  padding-top: 3rem;
  position: relative;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph .line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding-bottom: 4rem;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph .line div {
  width: 100%;
  border: 2px dashed #3333;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph .line:last-child {
  padding-bottom: 0;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph .wrapperGraphColum {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 3rem;
  right: 0;
  bottom: 0;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph .wrapperGraphColum div {
  position: relative;
  align-self: flex-end;
  width: 2rem;
  color: #fff;
  text-align: center;
  background-color: rgba(145, 85, 253, 0.85);
  border-radius: 10px;
  cursor: pointer;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph .wrapperGraphColum div span {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
  background-color: #f8f7f7;
  color: #333;
  padding: 1rem;
  border-radius: 10px;
  z-index: 1;
}
.wrapperGrid .gridListItem1 .item1 .wrapperGraph .wrapperGraphColum div:hover span {
  display: block;
}
.wrapperGrid .gridListItem1 .item1 .detail {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.wrapperGrid .gridListItem1 .item1 .button {
  width: 100%;
  padding: 1rem;
  background-color: rgba(145, 85, 253, 0.85);
  border-radius: 10px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}
.wrapperGrid .gridListItem1 .item1 .button:hover {
  opacity: 0.7;
}
.wrapperGrid .gridListItem1 .item2 .totals {
  padding: 2rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}
.wrapperGrid .gridListItem1 .item2 .totals h3 {
  font-size: 3rem;
  font-weight: 600;
  color: rgba(58, 53, 65, 0.87);
}
.wrapperGrid .gridListItem1 .item2 .totals div {
  transform: rotate(180deg);
}
.wrapperGrid .gridListItem1 .item2 .totals div, .wrapperGrid .gridListItem1 .item2 .totals span {
  color: #56ca00;
  font-size: 1.8rem;
}
.wrapperGrid .gridListItem1 .item2 p {
  font-size: 1.7rem;
  color: rgba(58, 53, 65, 0.68);
}
.wrapperGrid .gridListItem1 .item2 .wrapperOther {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding-top: 2rem;
}
.wrapperGrid .gridListItem1 .item2 .wrapperOther .image {
  height: 5rem;
  width: 5rem;
  background-color: rgba(58, 53, 65, 0.04);
  border-radius: 8px;
}
.wrapperGrid .gridListItem1 .item2 .wrapperOther .image img {
  object-fit: contain;
  padding: 1rem;
}
.wrapperGrid .gridListItem1 .item2 .wrapperOther .info {
  flex-grow: 1;
}
.wrapperGrid .gridListItem1 .item2 .wrapperOther .info span {
  color: rgba(58, 53, 65, 0.68);
}
.wrapperGrid .gridListItem1 .item3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
}
.wrapperGrid .gridListItem1 .item3 .box {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
}
.wrapperGrid .gridListItem1 .item3 .box .price {
  position: relative;
}
.wrapperGrid .gridListItem1 .item3 .box .price span {
  position: absolute;
  top: -1rem;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(1) .wrapperIcon {
  background-color: #56ca00;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(1) span {
  color: #56ca00;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(2) .wrapperIcon {
  background-color: #8a8d93;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(2) .price span {
  color: #ff4c51;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(3) .wrapperIcon {
  background-color: #9155fd;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(3) .price span {
  color: #ff4c51;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(4) .wrapperIcon {
  background-color: #56ca00;
}
.wrapperGrid .gridListItem1 .item3 .box:nth-child(4) .price span {
  color: #ff4c51;
}
.wrapperGrid .gridListItem1 .item3 h5 {
  font-size: 1.8rem;
  color: rgba(58, 53, 65, 0.68);
}
.wrapperGrid .gridListItem2 table {
  width: 100%;
}
.wrapperGrid .gridListItem2 th {
  text-align: start;
}
.wrapperGrid .gridListItem2 th, .wrapperGrid .gridListItem2 td {
  color: rgba(58, 53, 65, 0.68);
}
.wrapperGrid .gridListItem2 thead th, .wrapperGrid .gridListItem2 tbody td {
  border-bottom: 1px solid #3333;
  padding-bottom: 1rem;
}
.wrapperGrid .gridListItem2 .name {
  font-weight: 600;
}
.wrapperGrid .gridListItem2 .status span {
  padding: 0.5rem 1rem;
  background-color: #56ca00;
  color: white;
  border-radius: 20px;
}
.wrapperIcon {
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.5s linear;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapperIcon:hover {
  background-color: #e7e7e7;
}
.wrapperIcon .icon, .wrapperIcon .iconMenu {
  position: absolute;
  color: white;
}
.wrapperIcon .iconMenu {
  color: black;
}
.wrapperTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 2.5rem;
  font-weight: 300;
}
.box {
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  box-shadow: 1px 1px 5px #cccbcb;
}
.h-30-custom{
    height: 30%;
}
.h-50-custom{
    height: 50%;
}
.h-80-custom{
    height: 80%;
}

</style>
