"""Associate WorkflowInstances with Signals

Revision ID: 1dafcb9ad889
Revises: b48b245f9c4c
Create Date: 2023-03-24 10:51:26.443920

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = "1dafcb9ad889"
down_revision = "b48b245f9c4c"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("workflow_instance", sa.Column("signal_id", sa.Integer(), nullable=True))
    op.create_foreign_key(
        None, "workflow_instance", "signal", ["signal_id"], ["id"], ondelete="CASCADE"
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, "workflow_instance", type_="foreignkey")
    op.drop_column("workflow_instance", "signal_id")
    # ### end Alembic commands ###