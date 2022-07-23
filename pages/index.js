import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import NextLink from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} xs={12} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  {/* paddingTop:56.25%   16:9 */}
                  <CardMedia style={{ height: 0, paddingTop: '100%' }} components="img" image={product.image} title={product.name}>
                  </CardMedia>
                  <CardContent>
                    <Typography>
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>
                    {product.price}
                  </Typography>
                  <Button size='small' color='primary'>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

    </Layout>
  )
}
