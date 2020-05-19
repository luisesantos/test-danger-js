import {fail, warn, message, markdown, danger} from "danger";

fail("This is a Failure message");
warn("This is a Warning message");
message("This is a Message");
markdown("*Markdown* is also *supported*");

const {additions = 0, deletions = 0} = danger.github.pr;
message(`:tada: The PR added ${additions} and removed ${deletions} lines`);