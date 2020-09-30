<template>
    <div>
        <div class="advantages">
            <div class="advantages__item item">
                <div class="item__img">
                    <i class="el-icon-bangzhu icon"></i>
                </div>
                <div class="item__desc desc">
                    <p class="desc__subtitle">Поддержка</p>
                    <p class="desc__text">
                        Лорем ипсум долор сит амет, еос иусто тамяуам ут. 
                        Сонет витае молестие те сеа, еа вел стет делицата, дицат солеат епицури вел ан. 
                        Пер ид нонумы адмодум детерруиссет, идяуе патриояуе аргументум ад усу. 
                        Децоре номинати сед еу, те утинам лаборе плацерат вим.
                    </p>
                </div>
            </div>
            <div class="advantages__item item">
                <div class="item__img">
                    <i class="el-icon-truck icon"></i>
                </div>
                <div class="item__desc desc">
                    <p class="desc__subtitle">Доставка</p>
                    <p class="desc__text">
                        Лорем ипсум долор сит амет, еос иусто тамяуам ут. 
                        Сонет витае молестие те сеа, еа вел стет делицата, дицат солеат епицури вел ан. 
                        Пер ид нонумы адмодум детерруиссет, идяуе патриояуе аргументум ад усу. 
                        Децоре номинати сед еу, те утинам лаборе плацерат вим.
                    </p>
                </div>
            </div>
            <div class="advantages__item item">
                <div class="item__img">
                    <i class="el-icon-medal-1 icon"></i>
                </div>
                <div class="item__desc desc">
                    <p class="desc__subtitle">Гарантия</p>
                    <p class="desc__text">
                        Лорем ипсум долор сит амет, еос иусто тамяуам ут. 
                        Сонет витае молестие те сеа, еа вел стет делицата, дицат солеат епицури вел ан. 
                        Пер ид нонумы адмодум детерруиссет, идяуе патриояуе аргументум ад усу. 
                        Децоре номинати сед еу, те утинам лаборе плацерат вим.
                    </p>
                </div>
            </div>
        </div>
        <div class="copyrights">
            <div class="copyrights-authors authors">
                Сделано:
                <a href="google.com" class="authors-link">
                    <em>seemsgoodich</em>
                </a>
                &
                <a href="google.com" class="authors-link">
                    <em>gwm</em>
                </a>
            </div>
            <p class="copyrights-inc">
                ©2020-2040 все права защищены
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .advantages {
        background-color: #F2F6FC;
        display: flex;
        justify-content: space-around;
    }

    .item {
        display: flex;
        padding: 10px 20px;
        text-align: center;
        align-items: center;
        max-width: 33.33%;
    }

    .icon {
        margin-top: 20px;
        font-size: 50px;
        margin-bottom: 20px;
        color: #20A0FF;
    }

    .desc {
        padding: 0 20px;
    }

    .desc__text {
        color: #1F2D3D;
    }

    .desc__subtitle {
        font-weight: 700;
    }

    .copyrights {
        padding: 20px 10px;
    }

    .authors-link {
        color: black;
        font-weight: 700;
    }

    .copyrights-inc {
        color: #8492A6;
    }
</style>