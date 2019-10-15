import React from 'react'
import MemberCard from './MemberCard'

const MembersArea = () => {

    const styleDiv = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }

    return (
        <div style={styleDiv}>
            <MemberCard></MemberCard><MemberCard></MemberCard><MemberCard></MemberCard><MemberCard></MemberCard>
        </div>
    )
}

export default MembersArea