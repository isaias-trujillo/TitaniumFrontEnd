import "../../layout/Horizontal.css"
import VerticalNavBar from "../../components/shared/navigation/admin/VerticalNavBar";
import {links} from "../../common/AdminLink";
import {useEffect, useState} from "react";
import tableColumns from "./tableColumns";
import IncomesContent from "../../components/incomes/IncomesContent";
import {ParsedIncome} from "../../fetching/get/res/IncomeResponse";
import fetchIncomesApi from "../../fetching/get/actions/fetchIncomesApi";
import PlanResponse from "../../fetching/get/res/PlanResponse";
import fetchPlansApi from "../../fetching/get/actions/fetchPlansApi";
import ClientResponse from "../../fetching/get/res/ClientResponse";
import fetchClientsApi from "../../fetching/get/actions/fetchClientsApi";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Incomes({name, onLogout}: Props) {
    const [incomes, setIncomes] = useState<Array<ParsedIncome>>([])
    const [plans, setPlans] = useState<Array<PlanResponse>>([])
    const [clients, setClients] = useState<Array<ClientResponse>>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetchIncomesApi().then((res) => {
                setIncomes(res)
            }).then(() => fetchClientsApi())
                .then((res) => setClients(res))
                .then(() => fetchPlansApi())
                .then((res) => setPlans(res))
                .finally(() => setLoading(false))
        }, []
    )

    return (
        <div id="layout" className="horizontal">
            <VerticalNavBar user={name} links={links} onLogout={onLogout}/>
            <IncomesContent
                table={{
                    columns: tableColumns,
                    records: incomes
                }}
                loading={loading}
                plans={plans}
                clients={clients}
            />
        </div>
    )
}
