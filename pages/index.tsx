import { NextPage } from "next"
import { Ticket } from "../schemas/tickets"

const Dashboard: NextPage<{tickets: Ticket[]}> = ({tickets}) => {
    return <>Dashboard</>
}

Dashboard.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/api/tickets')
    const tickets = await response.json()
    return { tickets }
}

export default Dashboard