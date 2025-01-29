import React from 'react'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb, Card } from 'react-bootstrap'

const But = () => {
  return (
    <div>
        <Card style={{background:"yellow"}}>
        <Card.Title>
            Title:Lokii
        <Card.Text>
            HI EVERYONE!
        </Card.Text>
        
        </Card.Title>
        <Card.Img src="https://th.bing.com/th/id/OIP.vVzb1fEnAkVnvg65sOHcSgHaE8?w=570&h=380&rs=1&pid=ImgDetMain" style={{
    display: 'block', 
    margin: '10px auto', 
    width: '140px',
    height: '150px',
    borderRadius: '10px'
  }}>

        </Card.Img>
         </Card>
      
        <Alert>I AM LOKIEE</Alert>
        <Alert variant='primary'>LOKI</Alert>
        <Card.Img src="https://th.bing.com/th/id/R.a8b158b711926ae43eae14325b1dff30?rik=FulS39N7U193Nw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-STIjF-untuw%2fUQyAHPpQIrI%2fAAAAAAAAAU8%2fJGw9rpYsNSg%2fs1600%2fSelf%2bMotivational%2bQuotes%2bDesktop%2bWallpapers%2b-%2bYogesh%2bGoel%2b-%2bygoel.com%2b(1).jpg&ehk=t%2fRoTi3nzyvV8SBx23JXtnwke6QbAjI3Aw6hzEI8Oto%3d&risl=&pid=ImgRaw&r=0" style={{height:'300px',width:'500px'}}>
        </Card.Img>
        <Alert variant='secondary'>LOKIEE</Alert>
        <Alert variant='success'>LOKITHA</Alert>
      <Button 
        type="button"
        class="btn btn-primary btn-lg btn-block"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        disabled
        >BUTTON FROM BOOTSTRAP
      </Button>
      <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>About</Breadcrumb.Item>
      <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>
      
    </div>
    
    
  )
}

export default But
