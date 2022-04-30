<template>
    <div class="container">
        <h1 class="display-2">Software Engineering </h1>
        <h4>Test table page test done...</h4>
            <div class="table-responsive">
                <table class="table table-hover table-striped table-light">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Prise</th>
                            <th>Count</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableItems" :key="item.id">
                            <td>{{item.productName}}</td>
                            <td>{{item.productPrice}}</td>
                            <td>{{item.productCount}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn btn-info" @click="homePage()">Home</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableItems:[
                    {id:1,productName:'software1',productPrice:100,productCount:10},
                    {id:2,productName:'software2',productPrice:200,productCount:15},
                    {id:3,productName:'software3',productPrice:300,productCount:13},
                    {id:4,productName:'software4',productPrice:600,productCount:15},
                    {id:5,productName:'software5',productPrice:100,productCount:14},
                    {id:6,productName:'software6',productPrice:100,productCount:16},
                    {id:7,productName:'software7',productPrice:100,productCount:10},
                    {id:8,productName:'software8',productPrice:100,productCount:10},
                    {id:9,productName:'software9',productPrice:100,productCount:10},
                    {id:10,productName:'software10',productPrice:100,productCount:10},
                    {id:11,productName:'software11',productPrice:100,productCount:10},
                    {id:12,productName:'software12',productPrice:100,productCount:10},
                    {id:13,productName:'software13',productPrice:100,productCount:10},
                    {id:14,productName:'software14',productPrice:100,productCount:10},
                    {id:15,productName:'software15',productPrice:100,productCount:10},
                    {id:16,productName:'software16',productPrice:100,productCount:10},
                ]
            }
        },
        methods:{
            homePage(){
                const answer = confirm('Do you want serious leave page?')
                if(answer)
                return this.$router.push('/');
                else
                return false;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
